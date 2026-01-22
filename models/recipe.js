const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    pizzaType: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
      enum: ['small', 'medium', 'large'],
    },
    crust: {
      type: String,
      required: true,
      trim: true,
    },
    sauce: {
      type: String,
      required: true,
      trim: true,
    },
    instructions: {
      type: String,
      required: false,
      trim: true,
    },
    cheeseLevel: {
      type: String,
      required: false,
      trim: true,
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
    image: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
