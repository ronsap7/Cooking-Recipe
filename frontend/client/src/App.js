import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipesPage from './pages/recipesPage';
import RecipeDetailPage from './pages/recipeDetailPage';
import HomePage from './pages/homePage';
import Navbar from './components/Navbar';

const  App = () => {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/recipes" element={<RecipesPage/>} />
                <Route path="/recipes/:recipeId" element={<RecipeDetailPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
