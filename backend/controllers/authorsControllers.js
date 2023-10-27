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

module.exports = {
    getAuthor,
    setAuthor
}