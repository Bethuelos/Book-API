const asyncHandler = require('express-async-handler')

const Author = require('../models/authorModel')

const getAuthor = asyncHandler(async (req, res) => {
    const author = await Author.find()
    res.status(200).json(author)
})

const setAuthor = asyncHandler(async (req, res) => {
    if (!req.body.name){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the author\'s name')
    }

    const author = await Author.create({
        name: req.body.name
    })

    res.status(200).json(author)
})

const updateAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id)
    if(!author){
        res.status(400)
        throw new Error('Author not found')
    }

    const updateAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateAuthor)
})

const deleteAuthor = asyncHandler(async (req, res) => {
    const author = await Author.findById(req.params.id)

    if(!author){
        res.status(400)
        throw new Error('Author not found')
    }

    // await goal.remove()
    const deleteAuthor = await Author.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getAuthor,
    setAuthor,
    updateAuthor,
    deleteAuthor
}