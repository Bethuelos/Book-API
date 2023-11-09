const express = require('express')
const router = express.Router()
const {getBook, setBook, updateBook, deleteBook} = require('../controllers/booksControllers')

router.route('/').get(getBook).post(setBook)
router.route('/:id').put(updateBook).delete(deleteBook)

module.exports = router