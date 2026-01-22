const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  ingredients: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['meat', 'veggies', 'cheese', 'sauce', 'other']
  },
  price: {
    type: Number,
    required: false,
  },
},
  { timestamps: true }
);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
