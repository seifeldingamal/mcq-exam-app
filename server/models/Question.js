const mongoose = require('mongoose');

const schema = mongoose.Schema({
	text: {
        type: String,
        required: true,
    },
	choices: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('Question', schema);