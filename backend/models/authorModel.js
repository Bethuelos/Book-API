const mongoose = require('mongoose')

const authorSchema = mongoose.Schema (
    {
        name: {type: String, required: [true, 'please enter the autho\'s name']}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Author', authorSchema)