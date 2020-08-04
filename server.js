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
// const { User } = require("./models/user");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/


/*********************************************************/

/*** API Routes below ************************************/
// NOTE: The JSON routes (/students) are not protected in this react server (no authentication required). 
//       You can (and should!) add this using similar middleware techniques we used in lecture.

/** volunteer resource routes **/
// a POST route to *create* a volunteer
app.post("/volunteer", (req, res) => {
    // log(req.body)

    // Create a new student using the Student mongoose model
    const volunteer = new Volunteer({
        email: req.body.email,
        password: req.body.password
    });

    // Save student to the database
    student.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

// a POST for adding profile info to a particular volunteer
app.post("/volunteer/:id", (req, res) => {
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
    const volProfile = new Profile({

    })

    Volunteer.findById(id).then((volunteer)=> {
        if(!volunteer){
            res.status(404).send("404 Resource Not Found")
        } else {
            volunteer.profile = volProfile
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


