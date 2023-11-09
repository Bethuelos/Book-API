const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})

const getMe = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error ('invalid credential')
    }

    res.status(200).json(user)
})

const setUser = asyncHandler(async (req, res) => {
    if (!req.body.name){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the user\'s name')
    }

    if (!req.body.surname){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the user\'s surname')
    }

    if (!req.body.email){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the user\'s email')
    }

    if (!req.body.password){
        // res.status(400).json({message : 'please enter a text'})
        res.status(400)
        throw new Error('please enter the user\'s password')
    }

    email = req.body.email
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
    })

    res.status(200).json({
        _id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
    })
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
    })

    res.status(200).json(updateUser)
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('Role not found')
    }

    // await goal.remove()
    const deleteUser = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getUsers,
    getMe,
    loginUser,
    setUser,
    updateUser,
    deleteUser,
}