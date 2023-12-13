import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import TempCard from '../components/TempCard';

import CategoryFilter from '../components/CategoryFilter'; // Import CategoryFilter
import { useNavigate } from 'react-router-dom';


const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        const categoryQuery = selectedCategory === 'All' ? '' : `?category=${selectedCategory}`;
        fetch(`http://localhost:5555/recipes${categoryQuery}`)
            .then(response => response.json())
            .then(data => {
                setRecipes(data);

            })
            
                console.log(data); // Assuming the response directly returns the array of recipes
            })
            .catch(error => console.error('Error fetching Recipes:', error));
    }, []);

    // Fetch recipes based on selected category
    useEffect(() => {
        const categoryQuery = selectedCategory === 'All' ? '' : `?category=${selectedCategory}`;
        fetch(`http://localhost:5555/recipes${categoryQuery}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setRecipes(data);
            })
            .catch(error => console.error('Error fetching Recipes by category:', error));

    }, [selectedCategory]);
    



        if (newCategory !== null) { // Prevent deselection

            setSelectedCategory(newCategory);
            console.log("New category:", newCategory);
        }
    };

    const handleRecipeClick = (recipeId) => {
        navigate(`/recipes/${recipeId}`);
    };

    return (
        <Container>
            <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={handleCategoryChange} />
            <Grid container spacing={4}>
                {recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <Grid item xs={12} sm={6} md={4} key={recipe._id} onClick={() => handleRecipeClick(recipe._id)}>
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
