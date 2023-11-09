const express = require('express')
const router = express.Router()
const {getRole, setRole, updateRole, deleteRole} = require('../controllers/rolesControllers')

router.route('/').get(getRole).post(setRole)
router.route('/:id').put(updateRole).delete(deleteRole)

module.exports = router