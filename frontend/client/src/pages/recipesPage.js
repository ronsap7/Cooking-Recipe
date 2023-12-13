import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import TempCard from '../components/TempCard';
import CategoryFilter from '../components/CategoryFilter'; // Import CategoryFilter

const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Fetch all recipes on component mount
    useEffect(() => {
        fetch('http://localhost:5555/recipes')
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                console.log(data);// Assuming the response directly returns the array of recipes
            })
            .catch(error => console.error('Error fetching Recipes:', error));
    }, []);

    // Fetch recipes based on selected category
    useEffect(() => {
        const category = selectedCategory === 'All' ? '' : `/category/${selectedCategory}`;
        fetch(`http://localhost:5555/recipes/${category}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
            })
            .catch(error => console.error('Error fetching Recipes by category:', error));
    }, [selectedCategory]);

    const handleCategoryChange = (event, newCategory) => {
        if(newCategory !== null) { // Prevent deselection
            setSelectedCategory(newCategory);
        }
    };

    return (
        <Container>
            <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange} />
            <Grid container spacing={4} justify="center">
                {recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                            <TempCard recipe={recipe} />
                        </Grid>
                    ))
                ) : (
                    <p>No recipes available</p>
                )}
            </Grid>
        </Container>
    );
}

export default RecipePage;
