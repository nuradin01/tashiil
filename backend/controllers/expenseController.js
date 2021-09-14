const asyncHandler = require('express-async-handler')
const Expense = require('../models/expenseModel')

// @desc    Fetch all Expenses
// @route   GET /api/expenses
// @access  Public
exports.getExpenses = asyncHandler(async (req, res) => {

    const expenses = await Expense.find()

    res.status(200).json({ success: true, data: expenses })
})


// @desc            Create expense
// @route           POST /api/bootcamps
// @access          Private
exports.createExpense = asyncHandler(async (req, res, next) => {


    const createdExpense = await Expense.create(req.body);

    res.status(201).json({ success: true, data: createdExpense });
});