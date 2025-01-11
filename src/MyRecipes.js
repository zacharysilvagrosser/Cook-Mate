// Add your own recipe
// Search bar that updates after each new letter showing your recipes
// Filters and sorters for recipes (A-Z etc.)
// Favorite Recipes

import RecipeBox from "./RecipeBox";
import {Link} from "react-router-dom";

function MyRecipes(props) {
    return (
        <div className="container">
            <Link to='/createrecipe'>
                <button>Create a recipe</button>
            </Link>
            <div className='recipe-box-container'>
                {props.savedRecipes.map((item, index) => (
                    <RecipeBox item={item} key={index} savedRecipes={props.savedRecipes} setSavedRecipes={props.setSavedRecipes}/>
                ))}
            </div>
            {!props.savedRecipes.length && <p>Save recipes to view them in this section</p>}
        </div>
    )
}

export default MyRecipes;