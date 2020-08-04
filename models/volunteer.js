'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const ApplicationSchema = new mongoose.Schema({
    post_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    rank: {
        type: String,
        required:false
    }
});

const VolunteerSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,   // custom validator
			message: 'Not valid email'
		}
	}, 
	password: {
		type: String,
		required: true,
		minlength: 4
    },
    type: {
        type: String,
        required: false,
        default:"volunteer"
    },
    firstName:{
        type:String,
        required:true,
        minlength:1
    },
    lastName:{
        type:String,
        required:true,
        minlength:1
    },
    applications:[ApplicationSchema]

})

//Mongoose middleware 
VolunteerSchema.pre('save', function(next) {
	const user = this; 

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

VolunteerSchema.statics.findByEmailPassword = function(email, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ email: email }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the User schema
const Volunteer = mongoose.model('Volunteer', VolunteerSchema)
module.exports = { Volunteer }
