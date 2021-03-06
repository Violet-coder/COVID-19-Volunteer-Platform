'use strict';
const mongoose = require('mongoose')
const Post = mongoose.model('Post', {
	name: {
		type: String,			//post name
		required: true,
		minlegth: 1,
		trim: true
	},
	org_name: {
		type: String,			//organization name
		required: true,
		minlegth: 1,
		trim: true
	},
    description: {
		type: String,
		required: true,
        minlength: 1,
        trim: true
	}, 
	title: {
		type: String,
		required: true,
        minlength: 1,
        trim: true
	},
    location: {
		type: String,
		required: true,
	},
	requirements: [String],
    status: {
        type: String,
		required: true,
		default: "Under review"
	},
	date: {
		type: Date,
		required: true
	},
	org_id: {
		type: mongoose.Schema.Types.ObjectId,
        required:true
	},
	applications: [mongoose.Schema.Types.ObjectId],
})

module.exports = { Post }