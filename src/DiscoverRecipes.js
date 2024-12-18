// Recipe Suggesions: Search (autocomplete recipe search), Random
// Search Filters By Nutrients: Carbs, Protien, Cals, Fat, Alcohol, Caffeine, Fiber, Calcium, Sodium, Cholesterol, Fluoride, Sat Fat, (Maybe low>=33 med>=66 high>=100 buttons for each)
// Search Filters By Ingredients
// Search Filters By Classify Cuisine (country)
// Reccommened Dishes: Sick day (high in vitamin C), occassions? (xmas?), post workout (high protein), Diabetes (low carb), Healthy (Low fat/healthy)

// Once Img box is clicked, open page with new fetch request for Recipe Information with recipe ID and get more info
// Equipment pictures, Taste breakdown, Price, Ingredients, Nutrition

import {useEffect, useState} from "react";
import RecipeBox from "./RecipeBox";

function DiscoverRecipes() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${process.env.REACT_APP_API_KEY}`);
            const jsonData = await response.json();
            console.log(jsonData.recipes);
            setData(jsonData.recipes);
        }
        fetchData();
    }, []);
    return (
        <RecipeBox data={data} />
    )
}

export default DiscoverRecipes;