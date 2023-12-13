const express= require ('express');
const  { Recipe } = require('../models/recipeModels.js');


const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/', async (req, res) => {
    const { category } = req.query;
    try {
      const query = category && category !== 'All' ? { category } : {};
      const recipes = await Recipe.find(query);
      res.json(recipes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  


router.post('/', async (req, res) => {
    const recipe = new Recipe(req.body);
    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {image, category, 
            name,
            ingredients,
            instructions,
            servings,
             } = req.body; 
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id, { category, name, ingredients, instructions, servings, image}, { new: true });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json({ message: 'Recipe Updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;