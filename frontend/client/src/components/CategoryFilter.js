import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Other'];

  return (
    <ToggleButtonGroup
      value={selectedCategory}
      exclusive
      onChange={onSelectCategory}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        width: 'fit-content', 
        '& .MuiToggleButtonGroup-grouped': {
          margin: '8px', 
          border: 0, // 
          '&.Mui-selected': {
            backgroundColor: '#1976d2', 
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1565c0', 
            },
          },
          '&:not(:first-of-type)': {
            borderRadius: '4px', 
          },
          '&:first-of-type': {
            borderRadius: '4px', 
          },
        },
      }}
    >
      {categories.map((category) => (
        <ToggleButton key={category} value={category} sx={{ mx: 0.5 }}>
          {category}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CategoryFilter;
