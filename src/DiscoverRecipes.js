// Sort By Nutrients (RECIPE SORTING OPTION): Healthiness, Carbs, Protein, Cals, Fat, Alcohol, Caffeine, Fiber, Calcium, Sodium, Cholesterol, Fluoride, Sat Fat, (Maybe low>=33 med>=66 high>=100 buttons for each)
// Recommended Dishes: Sick day (high in vitamin C), occassions? (xmas?), post workout (high protein), Diabetes (low carb), Healthy (Low fat/healthy)

// Once Img box is clicked, open page with new fetch request for Recipe Information with recipe ID and get more info
// Equipment pictures, Taste breakdown, Price, Ingredients, Nutrition

import {useState} from "react";
import Filters from "./Filters";
import DiscoverSearchBar from "./DiscoverSearchBar";
import RecipeBox from "./RecipeBox";
import Pagination from "./Pagination";

function DiscoverRecipes() {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(0);
    const [cuisine, setCuisine] = useState([]);
    const [noCuisine, setNoCuisine] = useState([]);
    const [diet, setDiet] = useState([]);
    const [intolerances, setIntolerances] = useState([]);
    const [exclude, setExclude] = useState([]);

    return (
        <div id='discover-container'>
            <h1>Discover Recipes</h1>
            <DiscoverSearchBar page={page} setPage={setPage} setData={setData} cuisine={cuisine} diet={diet} intolerances={intolerances} exclude={exclude} noCuisine={noCuisine}/>
            <div id='recipe-section-container'>
                <Filters setCuisine={setCuisine} setDiet={setDiet} setIntolerances={setIntolerances} setExclude={setExclude} setNoCuisine={setNoCuisine}/>
                <div id='recipe-box-container'>
                    {data && data.map((item, index) => (
                        item.analyzedInstructions.length ? <RecipeBox item={item} key={index} data={data}/> : ''
                    ))}
                </div>
            </div>
            <Pagination page={page} setPage={setPage}/>
        </div>
    )
}

export default DiscoverRecipes;