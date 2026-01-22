const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');
const Ingredient = require('../models/ingredient.js');

// Index - GET 
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({ owner: req.session.user._id });
    const cart = req.session.cart || [];
    res.render('recipes/index.ejs', { recipes, cart });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Favorites - GET
router.get('/favorites', async (req, res) => {
  try {
    const favorites = await Recipe.find({ isFavorite: true }).populate('owner').populate('ingredients');
    res.render('recipes/favorites.ejs', { favorites });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Toggle Favorite - POST
router.post('/:recipeId/favorite', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    recipe.isFavorite = !recipe.isFavorite;
    await recipe.save();
    res.redirect(`/recipes/${req.params.recipeId}`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// New - GET 
router.get('/new', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.render('recipes/new.ejs', { ingredients });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Create - POST 
router.post('/', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    newRecipe.owner = req.session.user._id;
    await newRecipe.save();
    res.redirect('/recipes');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Show - GET 
router.get('/:recipeId', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId).populate('owner').populate('ingredients');
    res.render('recipes/show.ejs', { recipe });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Edit - GET 
router.get('/:recipeId/edit', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId).populate('ingredients');
    const ingredients = await Ingredient.find();
    res.render('recipes/edit.ejs', { recipe, ingredients });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Update - PUT
router.put('/:recipeId', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    Object.assign(recipe, req.body);
    await recipe.save();
    res.redirect(`/recipes/${req.params.recipeId}`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Delete - DELETE
router.delete('/:recipeId', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.recipeId);
    res.redirect('/recipes');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Add to Cart - POST 
router.post('/cart/add/:recipeId', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId).populate('owner');
    if (!req.session.cart) {
      req.session.cart = [];
    }
    req.session.cart.push(recipe);
    res.redirect('/recipes');
  } catch (error) {
    console.log(error);
    res.redirect('/recipes');
  }
});

// Remove from Cart - POST
router.post('/cart/remove/:recipeId', async (req, res) => {
  try {
    if (req.session.cart) {
      req.session.cart = req.session.cart.filter(item => item._id.toString() !== req.params.recipeId);
    }
    res.redirect('/recipes');
  } catch (error) {
    console.log(error);
    res.redirect('/recipes');
  }
});

// Checkout - POST 
router.post('/checkout', async (req, res) => {
  try {
    if (req.session.cart && req.session.cart.length > 0) {
      req.session.cart = [];
    }
    res.render('recipes/congratulations.ejs');
  } catch (error) {
    console.log(error);
    res.redirect('/recipes');
  }
});

module.exports = router;

