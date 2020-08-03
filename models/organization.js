const mongoose = require('mongoose')

const Organization = mongoose.model('Organization', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
    },
    email: {
        type: String,
		required: true,
		minlegth: 1,
		trim: true
    },
	introduction: {
		type: String,
		required: true,
		// default: 1
	}
})

module.exports = { Organization }