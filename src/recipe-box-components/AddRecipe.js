import {useEffect} from "react";

function AddRecipe(props) {
    // Add recipe to "My Recipes" List
    function addRecipe(recipe) {
        props.setSavedRecipes([...props.savedRecipes, recipe]);
    }
    // Delete recipe from "My Recipes" List
    function deleteRecipe(recipe) {
        props.setSavedRecipes(prevItems => prevItems.filter(recipeList => recipeList.id !== recipe));
    }
    // Create list of saved recipe IDs to check if the recipe is already added to your "My Recipes" list
    const recipeIDs = [];
    props.savedRecipes.forEach(recipe => {
        recipeIDs.push(recipe.id);    
    });
    // update local storage data whenever watch list movies change
    useEffect(() => {
        localStorage.setItem('savedRecipesData', JSON.stringify(props.savedRecipes));
    }, [props.savedRecipes]);
    // Return a button to add or delete the recipe from your "My Recipes" list depending on whether it's already on the list or not
    if (recipeIDs.includes(props.item.id)) {
        return (
            <button onClick={() => deleteRecipe(props.item.id)}>My Recipes -</button>
        )
    } else {
        return (
            <button onClick={() => addRecipe(props.item)}>My Recipes +</button>
        )
    }
}
export default AddRecipe;