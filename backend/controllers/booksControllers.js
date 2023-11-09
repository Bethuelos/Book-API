const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')

const getBook = asyncHandler(async (req, res) => {
    const book = await Book.find()
    res.status(200).json(book)
})

const setBook = asyncHandler(async (req, res) => {
    if (!req.body.title){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the book\'s title')
    }

    if (!req.body.date){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the book\'s comming out date')
    }

    const book = await Book.create({
        title: req.body.title,
        date: req.body.date,
        tag: req.body.tag,
        author: req.body.author
    })

    res.status(200).json(book)
})

const updateBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }

    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateBook)
})

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }

    // await goal.remove()
    const deleteBook = await Book.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getBook,
    setBook,
    updateBook,
    deleteBook
}