const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    ingredients: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['meat', 'veggies', 'cheese', 'sauce', 'other'],
      trim: true,
    },
  },
  { timestamps: true }
);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
