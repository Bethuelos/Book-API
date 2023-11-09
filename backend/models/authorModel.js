const mongoose = require('mongoose')

const authorSchema = mongoose.Schema (
    {
        name: {type: String, required: [true, 'please enter the author\'s name']}
    },
    {
        nationality: {type: String, required: [true, 'please enter the author\'s nationality']}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Author', authorSchema)