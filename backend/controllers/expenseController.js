const asyncHandler = require('express-async-handler')
const Expense = require('../models/expenseModel')

// @desc    Fetch all Expenses
// @route   GET /api/expenses
// @access  Public
exports.getExpenses = asyncHandler(async (req, res) => {

    const expenses = await Expense.find()

    res.status(200).json(expenses)
})


// @desc            Create expense
// @route           POST /api/bootcamps
// @access          Private
exports.createExpense = asyncHandler(async (req, res, next) => {

    const createdExpense = await Expense.create(req.body);

    res.status(201).json(createdExpense);
});

// @desc            Update expense
// @route           PUT /api/expense/:id
// @access          Private
exports.updateExpense = asyncHandler(async (req, res, next) => {
  let expense = await Expense.findById(req.params.id);
  if (!expense) {
    res.status(404)
    throw new Error('Expense not found')
  }


  expense = await Expense.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json( expense );
});