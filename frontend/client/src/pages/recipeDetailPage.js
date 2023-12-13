import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent } from '@material-ui/core';
import axios from 'axios';

function RecipeDetailPage() {
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { recipeId } = useParams(); // Extract the recipe ID from the URL parameters

    useEffect(() => {
        // Fetch the specific recipe data from the backend
        axios.get(`http://localhost:5555/recipes/${recipeId}`)
            .then(response => {
                setRecipe(response.data); // Set the recipe data
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipe details:', error);
                setIsLoading(false);
            });
    }, [recipeId]);

    if (isLoading) {
        return <p>Loading recipe details...</p>;
    }

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Servings: {recipe.servings}</Typography>
                    <Typography variant="h6">Ingredients</Typography>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                        ))}
                    </ul>
                    <Typography variant="h6">Instructions</Typography>
                    <Typography paragraph>{recipe.instructions}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default RecipeDetailPage;
