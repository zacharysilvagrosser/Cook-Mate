import React from 'react';
import './styles.css';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';
import DiscoverRecipes from './DiscoverRecipes';
import GroceryList from './GroceryList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeInfo from './RecipeInfo';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyRecipes />} />
        <Route path="/discoverrecipes" element={<DiscoverRecipes />} />
        <Route path="/grocerylist" element={<GroceryList />} />
        <Route path="/recipeinfo" element={<RecipeInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;