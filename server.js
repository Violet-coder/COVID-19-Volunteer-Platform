"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { Volunteer } = require("./models/volunteer"); 
const { Organization } = require("./models/organization")
const { Post } = require("./models/post");
const { Application } = require("./models/application")

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const organization = require("./models/organization");
//const application = require("./models/application");



app.use(bodyParser.urlencoded({ extended: true }));

/*** Helper function **************************************/
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}
/*********************************************************/

/*** API Routes below ************************************/
// NOTE: The JSON routes (/volunteers) are not protected in this react server (no authentication required). 
//       You can (and should!) add this using similar middleware techniques we used in lecture.
const authenticate = (req, res, next) => {
        if (req.session.user) {
            Volunteer.findById(req.session.user).then((vol) => {
                if (!vol) {
                    Organization.findById(req.session.user).then((org) =>{
                        if(!org){
                           return Promise.reject() 
                        } else {
                            next()
                        }
                    })                   
                } else {
                    next()
                }
            }).catch((error) => {
                res.status(401).send("Unauthorized")
            })
        } else {
            res.status(401).send("Unauthorized")
        }
}

/*** Session handling **************************************/
// Create a session cookie
app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 5*60000,
            httpOnly: true
        }
    })
);

app.post("/users/register", (req, res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    

    if(req.body.type === 'volunteer'){

        const volunteer = new Volunteer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        type:req.body.type
        })
        volunteer.save().then((result) => {
            res.send(result)
        }).catch((error) => {
            //log(error)
            res.status(400).send("Bad Request.")
        }) 
    } else if(req.body.type==='organization'){
        const organization = new Organization({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            type:req.body.type
        })
        organization.save().then((result) => {
            res.send(result) 
        }).catch((error) => {
            //log(error)
            res.status(400).send("Bad Request.")
        })
    } else if(req.body.type === 'admin'){
        const organization = new Organization({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            type:req.body.type
        })
        organization.save().then((result) => {
            res.send(result) 
        }).catch((error) => {
            log(error)
            res.status(400).send("Bad Request.")
        })
    }
    else{
        res.status(400).send()
    }

})

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  


    async function promiseAsynx(email, password){
        const promiseArray = [Volunteer.findByEmailPassword(email, password), Organization.findByEmailPassword(email, password)]
        const results = await Promise.all(promiseArray.map(p => p.catch(e => e)))
        return results
    }

    promiseAsynx(email, password).then(results =>
    {

        const validResult = results[0] || results[1]

        if(validResult){
            req.session.user = validResult._id
            req.session.email = validResult.email
            req.session.type = validResult.type
            res.send({
                currentUser: validResult.email,
                currentUserId: validResult._id,
                type: validResult.type
            })
        } else{
            res.send({
                message:"Email or password is not correct."
            })
        }
    }
    ).catch((error) => {
        log(error)
        if(isMongoError(error)){
            res.status(500).send("Internal server error")
        } else {
            res.status(400).send("Bad Request")
        }
    })
    
    
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a use is logged in on the session cookie
app.get("/users/check-session", (req, res) => {

    if (req.session.user) {
        res.send({ currentUser: req.session.email, currentUserId: req.session.user, type: req.session.type});
    } else {
        res.send({currentUser:null, currentUserId: null, type: null});
    }
});

/*** Admin Routes ***/
// a Post route to update a post 
app.post("/admin/post/approve/:id", authenticate,(req, res) => {


    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    Post.findById(id).then((post) => {
        if(!post){
            res.status(404).send("404 Resource not found.")
        } else {
            post.status = req.body.status
            post.date = new Date()
            post.save().then((result) => 
            res.send(result)
            ).catch((error) => {
                log(error)
                if(isMongoError()){
                    res.status(500).send("Intercal server error.")
                } else {
                    res.status(400).send("Bad request.")
                }
            })
        }
    }
        
    )
})

// a POST route to delete a post
app.post("/admin/post/delete/:post_id", authenticate,(req, res) => {
    const post_id = req.params.post_id
    if (!ObjectID.isValid(post_id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Post.findById(post_id).then((post)=>{
        if(!post){
            res.status(404).send("404 Resource not found.")
            return
        }
        Organization.findById(post.org_id).then((organization)=>{
            if(organization){
                const posts = []
                for (var i in organization.posts) {
                    if (String(organization.posts[i])!=post_id){
                        posts.push(organization.posts[i])
                    }
                }
                organization.posts = posts
                organization.save().then((result) => {
                    res.send(result)
                    Post.deleteOne({_id: post_id}, function (err) {
                        if (err) return handleError(err);})
                })
                .catch((error) => {
                    if(isMongoError(error)){
                        res.status(500).send('Internal server error')
                    } else{
                        res.status(400).send('Bad request.')
                    }
                })
            } else {
                Post.deleteOne({_id: post_id}, function(err, result){
                    if(err){
                        log(err)
                        res.status(500).send()
                    } else{
                        log(result)
                    }

                })
            }
        })
    })
    
});



// a GET route to get a specific organizations
app.get("/admin/organization/:id", authenticate,(req, res) =>{
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }  
    
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}

	Organization.findById(id).then((org) =>{
		if(!org){
            res.status(404).send("404 Resource not found.")
        } else {
            res.send(org)
        }
	})
	.catch((error)=> {
        log(error)
		res.status(500).send("Internal server error")
	})
})

// a GET route to get all organizations
app.get("/admin/allorganizations", authenticate,(req, res) =>{
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	Organization.find().then((org) =>{
		res.send(org)
	})
	.catch((error)=> {
        log(error)
		res.status(500).send("Internal server error")
	})
})


// a POST for updating profile info to a particular organization
app.post("/admin/organization/update/:id", authenticate,(req, res) => {
    // log(req.body)
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Organization.findById(id).then((organization)=> {
        if(!organization){
            res.status(404).send("404 Resource Not Found")
        } else {
            organization.website = req.body.website     
            organization.info = req.body.info
            organization.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
            })
        }
    })
});

// a POST route to delete a particular organization
// deleting an organization will modify Organization, Post and Application
// the response it the deleted organization in JSON
app.post('/admin/organization/delete/:orgId', authenticate,(req, res) => {
    const orgId = req.params.orgId
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }  
    
    if (!ObjectID.isValid(orgId)) {
		res.status(404).send('404 Resource Not Found')
		return;
    }

    Organization.findByIdAndRemove(orgId).then((organization) => {
        if(!organization){
            res.status(404).send('404 Resource Not Found')
		    return;
        }


        Post.find({org_id: orgId }).then((posts) => {
            let application_ids = new Array()
            
            posts.map(post =>{
                //application_ids.push(application_ids.concat(post.applications))
                application_ids = application_ids.concat(post.applications)
            } )
    
            Application.deleteMany({_id: {
                $in: application_ids
            }}, function(err, result){
                if(err){
                    log(err)
                    res.status(500).send("Internal server error.")
                } else {
                    //res.send(result)
                }
            } )
    
            Post.deleteMany({org_id: orgId }, function(err){
                if(err){
                    log(err)
                    res.status(500).send("Internal server error.");
                }
                console.log("Successful deletion");
            })
    
    
        })
        .catch((error) => {
            log(error)
            res.status(500).send("Internal server error.")
        })

        res.send(organization)

    }).catch(error => {
        log(error)
        res.status(500).send("Internal server error.")
    })

    Post.find({org_id: orgId }).then((posts) => {
        let application_ids = new Array()
        
        posts.map(post =>{
            //application_ids.push(application_ids.concat(post.applications))
            application_ids = application_ids.concat(post.applications)
        } )

        Application.deleteMany({_id: {
            $in: application_ids
        }}, function(err, result){
            if(err){
                log(err)
                res.status(500).send("Internal server error.")
            } else {
                //res.send(result)
            }
        } )

        Post.deleteMany({org_id: orgId }, function(err){
            if(err){
                log(err)
                res.status(500).send("Internal server error.");
            }
            console.log("Successful deletion");
        })


    })
    .catch((error) => {
        log(error)
        res.status(500).send("Internal server error.")
    })


})

// a GET route to get all volunteers
app.get("/admin/allvolunteers", authenticate,(req, res) =>{
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	Volunteer.find().then((vol) =>{
		res.send(vol)
	})
	.catch((error)=> {
        log(error)
		res.status(500).send("Internal server error")
	})
})

//a GET route to get a specific volunteer
app.get("/admin/volunteer/:id", authenticate,(req,res) => {
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }  
    
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}

	Volunteer.findById(id).then((vol) =>{
		if(!vol){
            res.status(404).send("404 Resource not found.")
        } else {
            res.send(vol)
        }
	})
	.catch((error)=> {
        log(error)
		res.status(500).send("Internal server error")
	})
})



// a POST for updating profile info to a particular volunteer
app.post("/admin/volunteer/update/:id", authenticate,(req, res) => {
    // log(req.body)
    const id = req.params.id 

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    Volunteer.findById(id).then((volunteer)=> {
        if(!volunteer){
            res.status(404).send("404 Resource Not Found")
        } else {
            volunteer.location = req.body.location       
            volunteer.links = req.body.links
            volunteer.desc = req.body.desc
            volunteer.skills = req.body.skills
            volunteer.availability = req.body.availability
            volunteer.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
				
            })
        }
    })
});

// a POST route to delte a specific volunteer
// the response is the deleted volunteer in JSON
app.post('/admin/volunteer/delete/:volId', authenticate,(req, res) => {
    const volId = req.params.volId
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    }  
    
    if (!ObjectID.isValid(volId)) {
		res.status(404).send('404 Resource Not Found')
		return;
    }


    
    Volunteer.findByIdAndRemove(volId).then((vol) => {

        if(!vol){
            res.status(404).send('404 Resource Not Found')
		    return;
        }

        Application.find({applicant_id: volId }).then((applications) => {
            let application_ids = new Array()
            
            applications.map(app =>{
                //application_ids.push(application_ids.concat(post.applications))
                application_ids.push(app._id)
            } )
    
    
            application_ids.map(id => {
                id = JSON.stringify(id)
            })
    
    
            //update the Post that contains the id in the application_ids array
            application_ids.map( app_id =>{
                Post.find({
                    "applications":app_id
                }).then(post => {
                    let filteredApplications = post[0].applications
                    filteredApplications = filteredApplications.filter(res_id => {
                        return JSON.stringify(res_id) !== JSON.stringify(app_id)
                    })
                    
                    post[0].applications = filteredApplications
    
                    post[0].save().catch(error => {
                        log(error)
                    })
                    
                }).catch(error =>{
                    log(error)
                    res.status(500).send("Internal server error.")
                })
            }
            )
    
            //remove the applications
            Application.deleteMany({_id: {
                $in: application_ids
            }}, function(err, result){
                if(err){
                    log(err)
                    res.status(500).send("Internal server error.")
                } else {
                    //res.send(result)
                }
            } )
            //send the delted volunteer in response
            res.send(vol)
    
        })
        .catch((error) => {
            log(error)
            res.status(500).send("Internal server error.")
        })


    }).catch(error => {
        log(error)
        res.status(500).send("Internal server error.")
    })


}

)



/** volunteer resource routes **/
// a POST route to *create* a volunteer
app.post("/volunteer", (req, res) => {

    // Create a new volunteer using the Volunteer mongoose model
    const volunteer = new Volunteer({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName:req.body.lastName
    });

    // Save volunteer to the database
    volunteer.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});
// a GET for getting vol profile from a particulat volunteer
app.get('/volunteer/profile/:id', authenticate, (req, res) => {
    // Add code here

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Volunteer.findById(id).then((volunteer)=>{
		if(!volunteer){
			res.status(404).send('404 Resource Not Found')
		} else {
			res.send(volunteer)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

});


// a POST for updating profile info to a particular volunteer
app.post("/volunteer/update/:id", authenticate, (req, res) => {
    // log(req.body)
    const id = req.params.id
    

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 

    

    Volunteer.findById(id).then((volunteer)=> {
        if(!volunteer){
            res.status(404).send("404 Resource Not Found")
        } else {
            volunteer.location = req.body.location       
            volunteer.links = req.body.links
            volunteer.desc = req.body.desc
            volunteer.skills = req.body.skills
            volunteer.availability = req.body.availability
            volunteer.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                
					res.status(500).send(error)
				
				
				
            })
        }
    })
});

// a POST request for adding an application to a particular volunteer
app.post('/volunteer/application/:id', authenticate, (req, res) => {
    const id = req.params.id
    const post_id = req.body.post_id
    var applicant_name;
    
    	
	if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
	}
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Volunteer.findById(id).then((volunteer) => {
		if(!volunteer){
			res.status(404).send('404 Resource Not Found')
		} else {
            applicant_name = volunteer.firstName + " " +volunteer.lastName
            const newApplication = new Application ({
                applicant_id: id,
                applicant_name: applicant_name,
                applicant_status: "pending", //status here should be the application processing status: pending(default), approved, rejected
                post_id: req.body.post_id,
                post_name:req.body.post_name,
                applicant_rank: req.body.applicant_rank
            })
            
            newApplication.save().then((result) => {
                Post.findById(post_id).then((post) => {
                    if(!post){
                        res.status(404).send('404 Resource Not Found')
                    } else {
                        post.applications.push(result._id)
                        post.save().then((post) => {
                            res.send(post)    
                        })
                        .catch((error) => {          
                            res.status(500).send('Internal server error')
                            
                        })

                    }})

                // res.send(result)
            })
            .catch((error) => {	
                    res.status(400).send(error)	
            })
            
		}
    })
    
})

// a GET request for getting application list of a particular volunteer
app.get('/volunteer/applicatoinlist/:id', authenticate, (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	
    
    Application.find({'applicant_id': id}, function(err, foundapplications) {
        if(err) {
            res.status(500).send("Internal server error")
        } else {        
            res.send(foundapplications);
        }
    }); 
    

})

// a GET request for getting a particular application of a particular volunteer
app.get('/volunteer/getapplication/:id/:post_id', authenticate, (req, res) => {
	const vol_id = req.params.id
    const post_id = req.params.post_id
	if (!ObjectID.isValid(vol_id)) {
		res.status(404).send(vol_id)  
		return;  
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    
    Application.find({$and:[{"post_id": post_id}, {"applicant_id": vol_id}]}, function(err,foundapplication){
        if(err) {
            res.status(500).send("Internal server error")
        } else {        
            res.send(foundapplication);
        }
    })

})

/** post resource routes **/
// a POST route to *create* a post
app.post("/post", (req, res) => {
    // Create a new post using the Volunteer mongoose model
    const post = new Post({
        name: req.body.name,
        org_name: req.body.org_name,
        description: req.body.description,
        title: req.body.title,
        location: req.body.location,
        requirements: req.body.requirements,
        status: req.body.status,
        date: req.body.date,
        org_id:req.body.org_id,
        applications:[]
    });

    // Save post to the database
    post.save().then(
        result => {
            res.send(result);
        },
        error => {
            console.log(error)
            res.status(400).send("Bad request"); // 400 for bad request
        }
    );
});

// a Get route to get all the posts
app.get('/posts', (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	Post.find().then((posts) =>{
		res.send(posts)
	})
	.catch((error)=> {
        log(error)
		res.status(500).send("Internal server error")
	})


})

// a Get route to get information for one post 
app.get('/post/:id', (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Post.findById(id).then((post)=>{
		if(!post){
			res.status(404).send('404 Resource Not Found')
		} else {
			res.send(post)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

//a Get route to get the posts as search result
app.post('/search', (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

    const keyword = req.body.keyword
    if (keyword){
        const regex = new RegExp(escapeRegex(keyword), 'gi');
        Post.find({
            $or: [
              {'name': regex},
              {'description': regex}
            ] }, function(err, foundposts) {
            if(err) {
                res.status(500).send("Internal server error")
            } else {        
                res.send(foundposts);
            }
        }); 
    }

})


/** organization resource routes **/
// a POST route to *create* a organization
app.post("/organization", (req, res) => {
    //log(req.body)
    // Create a new organization using the Organization mongoose model
    const organization = new Organization({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        posts: []
    });

    // Save organization to the database
    organization.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

app.get('/organization/get_profile/:id', (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Organization.findById(id).then((organization)=>{
		if(!organization){
			res.status(404).send('404 Resource Not Found')
		} else {
			res.send(organization)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

// a POST for updating profile info to a particular organization
app.post("/organization/update_profile/:id",authenticate, (req, res) => {
    // log(req.body)
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Organization.findById(id).then((organization)=> {
        if(!organization){
            res.status(404).send("404 Resource Not Found")
        } else {
            organization.website = req.body.website     
            organization.info = req.body.info
            organization.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
            })
        }
    })
});
// a POST route to post a new job for organization users
app.post("/organization/post/:id",authenticate, (req, res) => {
    // log(req.body)
    const id = req.params.id
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
    }
    let org_name = ""
	Organization.findById(id).then((organization)=>{
		if(!organization){
            res.status(404).send('404 Resource Not Found')
            return 
		} else {
            org_name = organization.name
            const post = new Post({
                name: req.body.name,
                description: req.body.description,
                title: req.body.title,
                location: req.body.location,
                requirements: req.body.requirements,
                status: req.body.status,
                date: req.body.date,
                org_id: id,
                org_name: org_name,
                applications: []
            });
            post.save().then(
                result => {
                    res.send(result);
                    Organization.findById(id).then((organization)=>{
                        if(!organization){
                            res.status(404).send('404 Resource Not Found')
                        } else {
                            const posts = organization.posts
                            posts.push(post._id)
                            organization.posts = posts
                            organization.save().then((result) => {
                                //res.send(result)
                            })
                            .catch((error) => {
                                if(isMongoError(error)){
                                    res.status(500).send('Internal server error')
                                } else{
                                    res.status(400).send('Bad request.')
                                }
                            })
                        }
                    })
                },
                error => {
                    res.status(400).send(error); // 400 for bad request
                }
            );
		}
	})
	.catch((error) => {
        res.status(500).send("Internal server error")
        return
	})
});

app.get('/organization/get_applicants/:id', authenticate, (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id
    const applicants = []
    const applications = []
	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Organization.findById(id).then((organization)=>{
		if(!organization){
			res.status(404).send('404 Resource Not Found')
		} else {
            const postList = new Array(organization.posts)
			for (var item in postList[0]) {
                Post.findById(postList[0][item]).then((post)=>{
                    if (!post) {
                        res.status(404).send('404 Resource Not Found')
                    }
                    else {
                        applicants.push.apply(applicants, post.applications)
                        if (item == postList[0].length-1) {
                            for (var applicant of applicants) {
                                Application.findById(applicant).then((application)=>{
                                    applications.push(application)
                                    if (applications.length === applicants.length) {
                                        res.send(applications)
                                    }
                                })
                            }

                        }

                        
                        
                    }
                })
            }
            
		}
	})          
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

app.post("/organization/edit_post/:post_id", authenticate, (req, res) => {
    // log(req.body)
    const id = req.params.post_id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Post.findById(id).then((post)=> {
        if(!post){
            res.status(404).send("404 Resource Not Found")
        } else {
            post.name = req.body.name     
            post.description = req.body.description
            post.title = req.body.title
            post.location = req.body.location
            post.requirements = req.body.requirements
            post.status = "Under review"
            post.date = req.body.date
            post.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
            })
        }
    })
});

app.post("/organization/delete_post/:post_id",authenticate, (req, res) => {
    const post_id = req.params.post_id
    if (!ObjectID.isValid(post_id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Post.findById(post_id).then((post)=>{
        if(!post){
            res.status(404).send("404 Resource not found.")
            return
        }
        Organization.findById(post.org_id).then((organization)=>{
            const posts = []
            for (var i in organization.posts) {
                if (String(organization.posts[i])!=post_id){
                    posts.push(organization.posts[i])
                }
            }
            organization.posts = posts
            organization.save().then((result) => {
                res.send(result)
                Post.deleteOne({_id: post_id}, function (err) {
                    if (err) return handleError(err);})
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
            })
        })
    })
    
});

app.get('/organization/get_vol_profile/:vol_id', authenticate, (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.vol_id

	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Volunteer.findById(id).then((volunteer)=>{
		if(!volunteer){
			res.status(404).send('404 Resource Not Found')
		} else {
			res.send(volunteer)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

app.get('/organization/get_posts/:id', authenticate, (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id
    const posts = []
	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Organization.findById(id).then((organization)=>{
		if(!organization){
			res.status(404).send('404 Resource Not Found')
		} else {
            const l = organization.posts.length
            organization.posts.map((id)=>{
                Post.findById(id).then((post)=>{
                    if (!post) {
                        res.status(404).send('404 Resource Not Found')
                    }
                    else {
                        posts.push(post)
                    }
                    if (posts.length==l) {
                        res.send(posts)
                    }
                })
            })       
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

app.get('/organization/get_applications/:app_id',authenticate, (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.app_id
	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Application.findById(id).then((application)=>{
		if(!application){
			res.status(404).send('404 Resource Not Found')
		} else {
            res.send(application)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

app.post("/organization/reject/:app_id", authenticate, (req, res) => {
    // log(req.body)
    const id = req.params.app_id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Application.findById(id).then((application)=> {
        if(!application){
            res.status(404).send("404 Resource Not Found")
        } else {
            application.applicant_status = 'rejected'  
            application.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
            })
        }
    })
});

app.post("/organization/accept/:app_id", authenticate, (req, res) => {
    // log(req.body)
    const id = req.params.app_id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
    } 
    Application.findById(id).then((application)=> {
        if(!application){
            res.status(404).send("404 Resource Not Found")
        } else {
            application.applicant_status = 'accepted'
            application.save().then((result) => {
                res.send(result)
            })
            .catch((error) => {
                if(isMongoError(error)){
					res.status(500).send('Internal server error')
				} else{
					res.status(400).send('Bad request.')
				}
            })
        }
    })
});


/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));



//Dynamic url should go to index.html if it is correct
//Volunteer dynamic url
app.get("/volunteer/post/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})
app.get("/volunteer/orgProfile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

//Public dynamic url
app.get("/publicpost/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

app.get("/orgProfile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})



//Organization dynamic url
app.get("/organization/posts/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

app.get("/organization/volprofile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

//Admin dynamic url
app.get("/admin/posts/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

app.get("/admin/volunteers/volprofile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

app.get("/admin/volunteers/editvolprofile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

app.get("/admin/organizations/orgprofile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})

app.get("/admin/organizations/editorgprofile/:id", (req, res) => {
    const id = req.params.id

    if (!ObjectID.isValid(id)) {
		res.status(404).send('Resource not found')
		return;  
    }
    res.sendFile(__dirname + "/client/build/index.html");
})


// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/","/login","/signGuide","/orgSignUp","/volSignUp","/publicposts","/publicpost/:id", "/searchresult","/organization/profile", "/organization/update","/organization/applicants","/organization/post",
    "/volunteer", "/volunteer/userpage","/volunteer/myapplication","/volunteer/myprofile", "/volunteer/editprofile", "/volunteer/post/:id", "/volunteer/searchresult", "/volunteer/seeall","/admin/entry", "/admin/volunteers","/admin/organizations","/admin/posts"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    
    res.sendFile(__dirname + "/client/build/index.html");
 

    
});


/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
	log(`Listening on port ${port}...`)
});


