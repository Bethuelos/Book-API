const express = require('express')
const router = express.Router()
const {getTag, setTag, updateTag, deleteTag} = require('../controllers/tagsControllers')

router.route('/').get(getTag).post(setTag)
router.route('/:id').put(updateTag).delete(deleteTag)

module.exports = router