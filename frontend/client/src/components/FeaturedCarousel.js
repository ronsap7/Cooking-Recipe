import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FeaturedCarousel = ({ featuredRecipes }) => {

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const handleCarouselClick = () => {
    navigate('/recipes');
  };

  return (
    <Box sx={{ 
      width: '100%', 
      mt: 2, 
      mb: 2, 
      p: 2, 
      backgroundColor: '#f4f4f4', // Background color for the carousel
      '& .slick-slide': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }}>
      <Slider {...settings}>
        {featuredRecipes.map((recipe, index) => (
          
          <Paper key={index} onClick={handleCarouselClick} elevation={3} sx={{ p: 2, maxWidth: 600, margin: 'auto' }}>
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              style={{ width: '100%', maxHeight: '400px', display: 'block', margin: 'auto' }} 
            />
            <Typography variant="h5" sx={{ mt: 1, textAlign: 'center' }}>
              {recipe.name}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              {recipe.description}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Box>
  );


};

export default FeaturedCarousel;
