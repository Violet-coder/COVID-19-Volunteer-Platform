'use strict';
const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
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
const Application = mongoose.model('Application', ApplicationSchema)
module.exports = { Application }