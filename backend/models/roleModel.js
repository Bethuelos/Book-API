const mongoose = require('mongoose')

const roleSchema = mongoose.Schema (
    {
        title: {type: String, required: [true, 'please enter the role\'s title']}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Role', roleSchema)