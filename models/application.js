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
        required: true, 
        default: "D"
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
    post_name:{
        type: String,
        required:true // add

    }
})
const Application = mongoose.model('Application', ApplicationSchema)
module.exports = { Application }