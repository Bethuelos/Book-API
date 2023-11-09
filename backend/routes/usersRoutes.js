const express = require('express')
const router = express.Router()
const {getUsers, getMe, loginUser, setUser, updateUser, deleteUser} = require('../controllers/usersControllers')

router.route('/').get(getUsers).get(getMe).post(setUser)
router.route('/login').post(loginUser)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router