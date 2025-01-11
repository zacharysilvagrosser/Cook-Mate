import React from 'react';
import {useState} from 'react';
import './styles.css';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';
import DiscoverRecipes from './DiscoverRecipes';
import GroceryList from './GroceryList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeInfo from './RecipeInfo';
import CreateRecipe from './CreateRecipe';

function App() {
    const [data, setData] = useState(null);
    // load previous recipes before setting it to an empty array if there are none
    const [savedRecipes, setSavedRecipes] = useState(() => {
        const storedData = localStorage.getItem('savedRecipesData');
        return storedData ? JSON.parse(storedData) : [];
    });

    return (
        <BrowserRouter>
        <NavBar savedRecipes={savedRecipes}/>
        <Routes>
            <Route path="/" element={<MyRecipes data={data} setData={setData} savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>} />
            <Route path="/discoverrecipes" element={<DiscoverRecipes data={data} setData={setData} savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>} />
            <Route path="/grocerylist" element={<GroceryList />} />
            <Route path="/recipeinfo" element={<RecipeInfo savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>} />
            <Route path="/createrecipe" element={<CreateRecipe setData={setData} savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;