const express = require('express')
const router = express.Router()
const { getExpenses, createExpense, updateExpense } = require('../controllers/expenseController')

router.route('/').get(getExpenses).post(createExpense)
router.route('/:id').put(updateExpense)

module.exports = router;