import {useState} from "react";

function AddGroceries(props) {
    const groceryInfo = [];
    groceryInfo.push(props.item.id);
    props.item.extendedIngredients.forEach(ingredient => {
        groceryInfo.push(
            {
                ingredientName: `${ingredient.name} ${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong}`,
                ingredientAisle: `${ingredient.aisle}`
            });
    });

    function addToList(items) {
        props.setGroceryListItems([...props.groceryListItems, items]);
    }
    function deleteFromList(id) {
        props.setGroceryListItems(prevItems => prevItems.filter(recipeList => recipeList[0] !== id));
        //setNamesOnGroceryList(prevItems => prevItems.filter(recipeList => recipeList !== title));
    }
    console.log('the id', props.item.id);
    if (props.groceryListItems.some(arr => arr.includes(props.item.id))) {
        return (
            <button onClick={() => deleteFromList(props.item.id)}>Grocery List-</button>
        )
    } else {
        console.log('oo', props.groceryListItems)
        return (
            <button onClick={() => addToList(groceryInfo)}>Grocery List+</button>
        )
    }
}

export default AddGroceries;