const mongoose = require('mongoose')
const Role = require('./roleModel')

const userSchema = mongoose.Schema (
    {
        name: {type: String, required: [true, 'please enter the user\'s name']},
        surname: {type: String, required: [true, 'please enter the user\'s surname']},
        email: {type: String, required: [true, 'please enter the user\'s emqil'], unique: true},
        password: {type: String, required: [true, 'please enter the user\'s password']},
        role: {type: mongoose.Schema.Types.ObjectId, required: [true, 'please enter the user\'s role'], ref: 'Role'}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)