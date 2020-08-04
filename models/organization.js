'use strict';
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const OrganizationSchema = mongoose.model('Organization', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
    },
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
	type: {
		type: String,
        required: false,
        default: 'organization'
	},
    website: {
		type: String,
        required: false,
        trim: true
	},
	info: {
		type: String,
        required: false,
        trim: true
	},
	posts: {
		
	}
})

module.exports = { Organization }