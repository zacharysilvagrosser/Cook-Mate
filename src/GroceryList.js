// Show all selected recipes
// Have a compiled list of all ingredients needed for all recipes
// email list to your email when finished
// Organize groceries by ailse in extendedIngredients.aisle

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
    // compare ailses to grocery list ingredients to put the correct ingredients under each coorsponding aisle header
    return (
        <div>
            <h2>Grocery List</h2>
            {ailseList.map((aisleName, aisleIndex) => (
                <ol key={aisleIndex}>
                    <h3>{aisleName}</h3>
                    {props.groceryListItems.map((listItem) => (
                        listItem.map((listName, listIndex) => (
                            aisleName === listName.ingredientAisle ? <li key={listIndex}>{listName.ingredientName}</li> : ''
                        ))
                    ))}
                </ol>
            ))}
            
        </div>
    )
}

export default GroceryList;