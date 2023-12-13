import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import axios from 'axios';
import FeaturedCarousel from '../components/FeaturedCarousel'; // Your Carousel component

const HomePage = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  // Fetch featured recipes on component mount
  useEffect(() => {
    axios.get('http://localhost:5555/recipes') // Adjust if your endpoint is different
      .then(response => {
        setFeaturedRecipes(response.data);
      })
      .catch(error => console.error('Error fetching featured recipes:', error));
  }, []);

  return (
    <Box sx={{
      backgroundColor: '#fafafa', // Page background color
      minHeight: '100%', // Full view height
      width: '100%',
      py: 4, // Padding top and bottom
    }}>
      <Container>
        <Paper elevation={3} sx={{ 
          mb: 4, p: 3, 
          backgroundColor: '#fff', // Paper background color
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)', // Shadow effect
        }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{ color: '#333', fontWeight: 'bold' }} // Typography styling
          >
            Explore our collection of recipes.
          </Typography>
          <FeaturedCarousel featuredRecipes={featuredRecipes} />
        </Paper>
      </Container>
    </Box>
  );
};

export default HomePage;
