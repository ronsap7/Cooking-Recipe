import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, Typography, Box, CardMedia} from '@mui/material';
=======

import {  Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
>>>>>>> 8dc884f6e5ad6701faba60bd13423dc94909498f
import { styled } from '@mui/system';

// Update styling with the styled API from MUI v5
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.15s ease-in-out',
  backgroundColor: '#fdfbea',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Patrick Hand', cursive",
  color: '#8b5e3c',
}));

const StyledListItem = styled('li')(({ theme }) => ({
  fontFamily: "'Patrick Hand', cursive",
  color: '#8b5e3c',
  '&::marker': {
    color: '#8b5e3c',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
}));

function TempCard({ recipe }) {
  return (
    <StyledCard>
<<<<<<< HEAD
=======

      {/* Image */}
>>>>>>> 8dc884f6e5ad6701faba60bd13423dc94909498f
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.name}
      />
<<<<<<< HEAD
=======


      {/* Display image */}
      <StyledCardMedia
        image={recipe.image}
        title={recipe.name}
      />

>>>>>>> 8dc884f6e5ad6701faba60bd13423dc94909498f
      <CardContent>
        <StyledTypography variant="h5" gutterBottom>{recipe.name}</StyledTypography>
        
        {/* Display ingredients */}
        <StyledTypography variant="subtitle1" gutterBottom>Ingredients:</StyledTypography>
        <Box component="ul">
          {recipe.ingredients.map((ingredient, index) => (
            <StyledListItem key={index}>
              {ingredient.name} - {ingredient.quantity} {ingredient.unit}
            </StyledListItem>
          ))}
        </Box>

        {/* Display servings */}
        {recipe.servings && (
          <StyledTypography variant="subtitle2">Servings: {recipe.servings}</StyledTypography>
        )}

        {/* Display instructions */}
        {recipe.instructions && (
          <>
            <StyledTypography variant="subtitle1" gutterBottom>Instructions:</StyledTypography>
            <StyledTypography variant="body2">{recipe.instructions}</StyledTypography>
          </>
        )}
      </CardContent>
    </StyledCard>
  );
}

export default TempCard;
