const mongoose = require('mongoose')
const Author = require('./authorModel')
const Tag = require('./tagModel')

const bookSchema = mongoose.Schema (
    {
        title: {type: String, required: [true, 'please enter the book\'s title']},
        date: {type: Date, required: [true, 'please enter the book\'s comming out date']},
        tag: {type: mongoose.Schema.Types.ObjectId, required: [true, 'please enter the book\'s tag'], ref: 'Tag'},
        author: {type: mongoose.Schema.Types.ObjectId, required: [true, 'please enter the book\'s author'], ref: 'Author'}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Book', bookSchema)