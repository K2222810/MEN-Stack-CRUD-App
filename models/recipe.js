const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  pizzaType: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ['small', 'medium', 'large'],
  },
  crust: {
    type: String,
    required: true,
  },
  sauce: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: false,
  },
  cheeseLevel: {
    type: String,
    required: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
    },
  ],
  isFavorite: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
