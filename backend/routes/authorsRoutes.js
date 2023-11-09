const express = require('express')
const router = express.Router()
const {getAuthor, setAuthor, updateAuthor, deleteAuthor} = require('../controllers/authorsControllers')

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

router.route('/').get(getAuthor).post(setAuthor)
router.route('/:id').put(updateAuthor).delete(deleteAuthor)

module.exports = router