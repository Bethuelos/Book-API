const asyncHandler = require('express-async-handler')

const Tag = require('../models/tagModel')

const getTag = asyncHandler(async (req, res) => {
    const tag = await Tag.find()
    res.status(200).json(tag)
})

const setTag = asyncHandler(async (req, res) => {
    if (!req.body.title){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the tag\'s title')
    }

    const tag = await Tag.create({
        title: req.body.title
    })

    res.status(200).json(tag)
})

const updateTag = asyncHandler(async (req, res) => {
    const tag = await Tag.findById(req.params.id)

    if(!tag){
        res.status(400)
        throw new Error('Tag not found')
    }

    const updateTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateTag)
})

const deleteTag = asyncHandler(async (req, res) => {
    const tag = await Tag.findById(req.params.id)

    if(!tag){
        res.status(400)
        throw new Error('Tag not found')
    }

    // await goal.remove()
    const deleteTag = await Tag.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTag,
    setTag,
    updateTag,
    deleteTag
}