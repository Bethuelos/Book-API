const asyncHandler = require('express-async-handler')

const Role = require('../models/roleModel')

const getRole = asyncHandler(async (req, res) => {
    const role = await Role.find()
    res.status(200).json(role)
})

const setRole = asyncHandler(async (req, res) => {
    if (!req.body.title){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the role\'s title')
    }

    const role = await Role.create({
        title: req.body.title
    })

    res.status(200).json(role)
})

const updateRole = asyncHandler(async (req, res) => {
    const role = await Role.findById(req.params.id)

    if(!role){
        res.status(400)
        throw new Error('Role not found')
    }

    const updateRole = await Role.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateRole)
})

const deleteRole = asyncHandler(async (req, res) => {
    const role = await Role.findById(req.params.id)

    if(!role){
        res.status(400)
        throw new Error('Role not found')
    }

    // await goal.remove()
    const deleteRole = await Role.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getRole,
    setRole,
    updateRole,
    deleteRole
}