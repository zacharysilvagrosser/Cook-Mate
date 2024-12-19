// Recipe Suggesions: Search (autocomplete recipe search), Random
// Search Filters By Nutrients: Carbs, Protein, Cals, Fat, Alcohol, Caffeine, Fiber, Calcium, Sodium, Cholesterol, Fluoride, Sat Fat, (Maybe low>=33 med>=66 high>=100 buttons for each)
// Search Filters By Ingredients
// Search Filters By Classify Cuisine (country)
// Reccommened Dishes: Sick day (high in vitamin C), occassions? (xmas?), post workout (high protein), Diabetes (low carb), Healthy (Low fat/healthy)

// Once Img box is clicked, open page with new fetch request for Recipe Information with recipe ID and get more info
// Equipment pictures, Taste breakdown, Price, Ingredients, Nutrition

import { useState} from "react";
import Filters from "./Filters";

function DiscoverRecipes() {
    const [data, setData] = useState(null);
    const [cuisine, setCuisine] = useState([]);
    const fetchRecipes = async (newInput) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${newInput}&cuisine=${cuisine}&number=100&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
    }
    const fetchRandomRecipes = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
    }
    return (
        <div>
            <Filters cuisine={cuisine} setCuisine={setCuisine}/>
            <input id='discover-search' type='text' playerholder='Enter a recipe...'></input>
            <button id='discover-search-button' onClick={() => fetchRecipes((document.getElementById('discover-search').value))}>Search</button>
            <button onClick={fetchRandomRecipes}>Random</button>
            <button onClick={fetchRandomRecipes}>Reccommened</button>
        </div>
    )
}

export default DiscoverRecipes;