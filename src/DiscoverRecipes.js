// Recipe Suggesions: Search (autocomplete recipe search), Random
// Search Filters By Nutrients: Carbs, Protein, Cals, Fat, Alcohol, Caffeine, Fiber, Calcium, Sodium, Cholesterol, Fluoride, Sat Fat, (Maybe low>=33 med>=66 high>=100 buttons for each)
// Search Filters By Ingredients
// Search Filters By Classify Cuisine (country)
// Reccommened Dishes: Sick day (high in vitamin C), occassions? (xmas?), post workout (high protein), Diabetes (low carb), Healthy (Low fat/healthy)

// Once Img box is clicked, open page with new fetch request for Recipe Information with recipe ID and get more info
// Equipment pictures, Taste breakdown, Price, Ingredients, Nutrition

import {useState} from "react";
import Filters from "./Filters";
import DiscoverSearchBar from "./DiscoverSearchBar";
import RecipeBox from "./RecipeBox";

function DiscoverRecipes() {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(0);
    const [cuisine, setCuisine] = useState([]);

    // fetch the correct recipes for the new page based on what search type was already clicked
    function nextPage() {
        setPage(page + 100);
    }

    return (
        <div id='discover-container'>
            <Filters cuisine={cuisine} setCuisine={setCuisine}/>
            <DiscoverSearchBar page={page} setPage={setPage} data={data} setData={setData} cuisine={cuisine}/>
            {data && data.map((item, index) => (
                <RecipeBox item={item} key={index}/>
            ))}
            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}

export default DiscoverRecipes;