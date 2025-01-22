// Show all selected recipes
// Have a compiled list of all ingredients needed for all recipes
// email list to your email when finished
// Organize groceries by ailse in extendedIngredients.aisle
import React, { useRef } from 'react';
function GroceryList(props) {
    // compile a list of all ailses included on the grocery list to create list items
    const ailseList = [];
    props.groceryListItems.forEach(listItem => {
        listItem.forEach(aisle => {
            if (!ailseList.includes(aisle.ingredientAisle)) {
                ailseList.push(aisle.ingredientAisle)
            }
        });
    });

    const elementRefs = useRef([]);
    function strikethroughText(index) {
        const element = elementRefs.current[index];
        if (element && element.style.textDecoration === 'line-through') {
            element.style.textDecoration = 'none';
            console.log('element 1', element);
        } else {
            element.style.textDecoration = 'line-through';
            console.log('element 2', element);
        }
    }
    // compare ailses to grocery list ingredients to put the correct ingredients under each coorsponding aisle header
    return (
        <div>
            <h2>Grocery List</h2>
            {ailseList.map((aisleName, aisleIndex) => (
                <ul key={aisleIndex}>
                    <h3>{aisleName}</h3>
                    {props.groceryListItems.map((listItem) => (
                        listItem.map((listName, listIndex) => (
                            aisleName === listName.ingredientAisle ? <li
                                key={listIndex}
                                ref={(element) => { 
                                    elementRefs.current[listIndex] = element; 
                                }}
                                onClick={() => strikethroughText(listIndex)}>
                                {listName.ingredientName}
                            </li> : ''
                        ))
                    ))}
                </ul>
            ))}
            
        </div>
    )
}

export default GroceryList;