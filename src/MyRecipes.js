// Add your own recipe
// Search bar that updates after each new letter showing your recipes
// Filters and sorters for recipes (A-Z etc.)
// Favorite Recipes

import RecipeBox from "./RecipeBox";

function MyRecipes(props) {
    return (
        <div>
            <p>Save recipes to view them in this section</p>
            <div className='recipe-box-container'>
                {props.savedRecipes.length && props.savedRecipes.map((item, index) => (
                    <RecipeBox item={item} key={index} savedRecipes={props.savedRecipes} setSavedRecipes={props.setSavedRecipes}/>
                ))}
            </div>
        </div>
    )
}

export default MyRecipes;