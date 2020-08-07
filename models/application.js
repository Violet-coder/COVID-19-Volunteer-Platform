'use strict';
const mongoose = require('mongoose')

const Application = mongoose.model('Application', {
    applicant_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    applicant_name: {
        type: String,
        required:true
	},
	applicant_rank: {
		type: String,
		required: true
	},
	applicant_status: {
		type: String,
		required: true,
		default: 'pending'
    },
    post_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
})

module.exports = { Application }