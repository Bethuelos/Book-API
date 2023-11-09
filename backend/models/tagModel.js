const mongoose = require('mongoose')

const tagSchema = mongoose.Schema (
    {
        title: {type: String, required: [true, 'please enter the tag\'s title']}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Tag', tagSchema)