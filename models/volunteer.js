'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const ApplicationSchema = new mongoose.Schema({
    post_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    name:{
        type: String,
        minlegth: 1,
		trim: true
    },
    status: {
        type: String,
        required:true,
        default:"pending"
    },
    rank: {
        type: String,
        required:false
    }
});

const SkillsSchema = new mongoose.Schema({
    analytics: {
        type: Boolean,
        required:false,
        default:false
    },
    biology: {
        type: Boolean,
        required:false,
        default:false
    },
    biotech: {
        type: Boolean,
        required:false,
        default:false
    },
    community: {
        type: Boolean,
        required:false,
        default:false
    },
    content: {
        type: Boolean,
        required:false,
        default:false
    },
    data: {
        type: Boolean,
        required:false,
        default:false
    },
    finance: {
        type: Boolean,
        required:false,
        default:false
    },
    helpdesk: {
        type: Boolean,
        required:false,
        default:false
    },
    manufacturing: {
        type: Boolean,
        required:false,
        default:false
    },
    marketing: {
        type: Boolean,
        required:false,
        default:false
    },

    mechanics: {
        type: Boolean,
        required:false,
        default:false
    },
    IT: {
        type: Boolean,
        required:false,
        default:false
    },
    anything: {
        type: Boolean,
        required:false,
        default:false
    }
})

const AvailabilitySchema = new mongoose.Schema({
    option1: {
        type: Boolean,
        required:false,
        default:false
    },
    option2: {
        type: Boolean,
        required:false,
        default:false
    },
    option3: {
        type: Boolean,
        required:false,
        default:false
    },
    option4: {
        type: Boolean,
        required:false,
        default:false
    },
    option5: {
        type: Boolean,
        required:false,
        default:false
    },
    
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
    location: {
        type:String,
        required:false,
        minlength:1,

    },
    desc: {
        type: String,
        required: false,
        minlength: 1

    },
    links: {
        type: String,
        required: false,
        minlength: 1

    },

    skills: SkillsSchema,
    availability: AvailabilitySchema,
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
