import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { Container, Typography, Card, CardContent, CardMedia} from '@material-ui/core';
=======
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
>>>>>>> 8dc884f6e5ad6701faba60bd13423dc94909498f
import axios from 'axios';

function RecipeDetailPage() {
    const [recipe, setRecipe] = useState(null);
    const { recipeId } = useParams();
    // const navigate = useNavigate();

    useEffect(() => {
        // Fetch the specific recipe
        axios.get(`http://localhost:5555/recipes/${recipeId}`)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => console.error('Error fetching recipe:', error));
    }, [recipeId]);

    // const handleRecipeClick = (id) => {
    //     navigate(`/recipes/${id}`);
    // };

    if (!recipe) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <Card>
<<<<<<< HEAD
            <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.name}
      />
=======
                <CardMedia
                    component="img"
                    height="300"
                    image={recipe.image}
                    alt={recipe.name}
                />
>>>>>>> 8dc884f6e5ad6701faba60bd13423dc94909498f
                <CardContent>
                    
                    <Typography variant="h4" gutterBottom>{recipe.name}</Typography>
                    <Typography variant="subtitle1" gutterBottom>Servings: {recipe.servings}</Typography>
                    <Typography variant="h6" gutterBottom>Ingredients</Typography>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                        ))}
                    </ul>
                    <Typography variant="h6" gutterBottom>Instructions</Typography>
                    <Typography paragraph>{recipe.instructions}</Typography>
                </CardContent>
            </Card>

            {/* Other recipes or navigation buttons could be added here */}
        </Container>
    );
}

export default RecipeDetailPage;
