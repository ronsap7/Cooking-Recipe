const mongoose = require ('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    unit: String
});

const RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [IngredientSchema],
    image: { type: String, required: true },
    instructions: { type: String, required: true },
    servings: { type: Number, required: true },
    category: {
        type: String,
        enum: ['All', 'Breakfast', 'Lunch', 'Dinner', 'Other',],
        default: 'All',
    }
});

 const Recipe = mongoose.model('Recipe', RecipeSchema);

 module.exports = { Recipe };
