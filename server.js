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
//const application = require("./models/application");



app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/


/*********************************************************/

/*** API Routes below ************************************/
// NOTE: The JSON routes (/volunteers) are not protected in this react server (no authentication required). 
//       You can (and should!) add this using similar middleware techniques we used in lecture.

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
        log("register as vol")
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
            log(error)
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
            log(error)
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


    log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    /* Volunteer.findByEmailPassword(email, password)
        .then(user => {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            console.log("find user",user)
            req.session.user = user._id;
            req.session.email = user.email;
            req.session.type = user.type
            res.send({ currentUser: user.email,
                       currentUserId: user._id,
                       type: user.type});
        })
        .catch(error => {
            res.status(400).send()
        }); */
        async function promiseAsynx(email, password)
        {
            const promiseArray = [Volunteer.findByEmailPassword(email, password), Organization.findByEmailPassword(email, password)]
            const results = await Promise.all(promiseArray.map(p => p.catch(e => e)))
            return results
        }
        promiseAsynx(email, password).then(results =>
        {
            log("results",results)
            const validResult = results[0] || results[1]
            log('valide',validResult)
            if(validResult){
                req.session.user = validResult._id
                req.session.email = validResult.email
                req.session.type = validResult.type
                res.send({
                    currentUser: validResult.email,
                    currentUserId: validResult._id,
                    type: validResult.type
                })
            }
        }
        ).catch((error) => {
            log(error)
        })
        
        
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    log('remove session')
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
    console.log("req session",req.session.user)
    if (req.session.user) {
        res.send({ currentUser: req.session.email, currentUserId: req.session.user, type: req.session.type});
    } else {
        res.status(401).send();
    }
});

/*** Admin Routes ***/



/** volunteer resource routes **/
// a POST route to *create* a volunteer
app.post("/volunteer", (req, res) => {
    // log(req.body)

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
app.get('/volunteer/profile/:id', (req, res) => {
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
app.post("/volunteer/update/:id", (req, res) => {
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

// a POST request for adding an application to a particular volunteer
app.post('/volunteer/application/:id', (req, res) => {
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
	const newApplication = {
        post_id: req.body.post_id,
        name:req.body.name,
        status: req.body.status,  //status here should be the application processing status: pending(default), approved, rejected
    }
    
	Volunteer.findById(id).then((volunteer) => {
		if(!volunteer){
			res.status(404).send('404 Resource Not Found')
		} else {
            volunteer.applications.push(newApplication)
            console.log
			volunteer.save().then((result) => {
				res.send(result.applications)    
			})
			.catch((error) => {
				res.status(400).send("Bad Request.")
				
			})
		}
	})
	

})

// a GET request for getting application list of a particular volunteer
app.get('/volunteer/applicatoinlist/:id', (req, res) => {
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
			// could't find the volunteer
			res.status(404).send('404 Resource Not Found')
		} else {
			res.send(volunteer.applications)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
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
        applications:req.body.applications
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

/** organization resource routes **/
// a POST route to *create* a organization
app.post("/organization", (req, res) => {
    // log(req.body)

    // Create a new organization using the Organization mongoose model
    const organization = new Organization({
        email: req.body.email,
        password: req.body.password,
        name: req.body.firstname,
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
app.post("/organization/update_profile/:id", (req, res) => {
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

app.post("/organization/post/:id", (req, res) => {
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
    let org_name
	Organization.findById(id).then((organization)=>{
		if(!organization){
			res.status(404).send('404 Resource Not Found')
		} else {
			org_name = organization.name
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})
    const post = new Post({
        name: req.body.name,
        description: req.body.description,
        title: req.body.title,
        location: req.body.location,
        requirements: req.body.requirements,
        is_approved: req.body.is_approved,
        date: req.body.date,
        org_id: id,
        org_name: org_name,
    });
    post.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

app.get('/organization/get_applicants/:id', (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	const id = req.params.id
    const applicants = []
	if (!ObjectID.isValid(id)) {
		res.status(404).send('404 Resource Not Found')
		return;
	}
	Organization.findById(id).then((organization)=>{
		if(!organization){
			res.status(404).send('404 Resource Not Found')
		} else {
			for (var i in organization.posts) {
                Post.findById(organization.posts[i]).then((post)=>{
                    if (!post) {
                        res.status(404).send('404 Resource Not Found')
                    }
                    else {
                        applicants.push(post)
                    }
                })
            }
            res.send(applicants)
		}
	})          
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

app.post("/organization/edit_post/:post_id", (req, res) => {
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

app.get('/organization/get_vol_profile/:vol_id', (req, res) => {
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

app.get('/organization/get_posts/:id', (req, res) => {
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
			for (var i in organization.posts) {
                Post.findById(organization.posts[i]).then((post)=>{
                    if (!post) {
                        res.status(404).send('404 Resource Not Found')
                    }
                    else {
                        posts.push(post)
                    }
                })
            }
            res.send(posts)
		}
	})
	.catch((error) => {
		res.status(500).send("Internal server error")
	})

})

app.get('/organization/get_applications/:app_id', (req, res) => {
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

app.post("/organization/reject/:app_id", (req, res) => {
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

app.post("/organization/accept/:app_id", (req, res) => {
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
/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/volunteer","volunteer/5f29e3b9fcecd5232c568bfe"];
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


