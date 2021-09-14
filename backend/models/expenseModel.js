const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema(
  {
    expenseName: {
      type: String,
      required: [true, 'Please add an Expense name'],
      trim: true,
      maxlength: [50, 'Expense name can not be more than 50 characters'],
    },
    amount: {
      type: Number,
      required: [true, 'Please add the expense amount'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      enum: [
        'Shopping',
        'Charity',
        'Restaurants',
        'Bills',
        'Fees',
        'Other',
      ],
    },
    paiddAt: {
      type: Date,
      default: Date.now,
    },

  }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
