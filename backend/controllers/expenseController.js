const asyncHandler = require('express-async-handler')
const Expense = require('../models/expenseModel')

// @desc    Fetch all Expenses
// @route   GET /api/expenses
// @access  private
exports.getExpenses = asyncHandler(async (req, res) => {

    const expenses = await Expense.find()

    res.status(200).json(expenses)
})

// @desc            Get single expense
// @route           GET /api/expenses/:id
// @access          Private
exports.getExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.findById(req.params.id);

  // if the format of the ID is correct but not in database
  if (!expense) {
    res.status(404)
    throw new Error('Expense not found')
  }
  res.status(200).json(expense);
});

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

// @desc            Delete expense
// @route           DELETE /api/expense/:id
// @access          Private
exports.deleteExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(404)
    throw new Error('Expense not found')
  }

  expense.remove();
  res.status(200).json({message: 'expense removed'});
});