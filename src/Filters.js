function Filters(props) {
    // send an array of the checked filters to the fetch data function so the fetched data matches the filters
    function updateFilterArray(filterType) {
        const checkedInputs = document.querySelectorAll(`input[class=${filterType}-input]:checked`);
        const activeInputs = [];
        checkedInputs.forEach(recipe => {
            activeInputs.push(recipe.id);
        });
        console.log(activeInputs.join(','));
        const uncheckedInputs = document.querySelectorAll(`input[class=${filterType}-input]`);
        const inactiveInputs = [];
        uncheckedInputs.forEach(cuisine => {
            if (!cuisine.checked) {
                inactiveInputs.push(cuisine.id);
            }
        });
        switch (filterType) {
            case 'cuisine':
                props.setCuisine(activeInputs.join(','));
                props.setNoCuisine(inactiveInputs.join(','));
                break;
            case 'diet':
                props.setDiet(activeInputs.join(','));
                break;
            case 'intolerances':
                props.setIntolerances(activeInputs.join(','));
                break;
            case 'exclude':
                props.setIntolerances(activeInputs.join(','));
                break;
        }
    }
    // set all filters to checked
    function checkFilters(filterType) {
        document.querySelectorAll(`.${filterType}-input`).forEach(filter => {
            filter.checked = true;
        });
    }
    // set all filters to unchecked
    function uncheckFilters(filterType) {
        document.querySelectorAll(`.${filterType}-input`).forEach(filter => {
            filter.checked = false;
        });
    }
    return (
        <div id='filters'>
            <div>
                <h3>Cuisine</h3>
                <ul>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="african" name="African"></input>
                        <label htmlFor="african">African</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="asian" name="Asian"></input>
                        <label htmlFor="asian">Asian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="american" name="American"></input>
                        <label htmlFor="american">American</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="british" name="British"></input>
                        <label htmlFor="british">British</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="cajun" name="Cajun"></input>
                        <label htmlFor="cajun">Cajun</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="caribbean" name="Caribbean"></input>
                        <label htmlFor="caribbean">Caribbean</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="chinese" name="Chinese"></input>
                        <label htmlFor="chinese">Chinese</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="eastern european" name="Eastern European"></input>
                        <label htmlFor="eastern-european">Eastern European</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="european" name="European"></input>
                        <label htmlFor="european">European</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="french" name="French"></input>
                        <label htmlFor="french">French</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="german" name="German"></input>
                        <label htmlFor="german">German</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="greek" name="Greek"></input>
                        <label htmlFor="greek">Greek</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="indian" name="Indian"></input>
                        <label htmlFor="indian">Indian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="irish" name="Irish"></input>
                        <label htmlFor="irish">Irish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="italian" name="Italian"></input>
                        <label htmlFor="italian">Italian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="japanese" name="Japanese"></input>
                        <label htmlFor="japanese">Japanese</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="jewish" name="Jewish"></input>
                        <label htmlFor="jewish">Jewish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="korean" name="Korean"></input>
                        <label htmlFor="korean">Korean</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="latin american" name="Latin American"></input>
                        <label htmlFor="latin-american">Latin American</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="mediterranean" name="Mediterranean"></input>
                        <label htmlFor="mediterranean">Mediterranean</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="mexican" name="Mexican"></input>
                        <label htmlFor="mexican">Mexican</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="middle eastern" name="Middle Eastern"></input>
                        <label htmlFor="middle-eastern">Middle Eastern</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="nordic" name="Nordic"></input>
                        <label htmlFor="nordic">Nordic</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="southern" name="Southern"></input>
                        <label htmlFor="southern">Southern</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="spanish" name="Spanish"></input>
                        <label htmlFor="spanish">Spanish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="thai" name="Thai"></input>
                        <label htmlFor="thai">Thai</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={() => updateFilterArray('cuisine')} id="vietnamese" name="Vietnamese"></input>
                        <label htmlFor="vietnamese">Vietnamese</label>
                    </li>
                </ul>
                <button onClick={() => checkFilters('cuisine')}>✓ All</button>
                <button onClick={() => uncheckFilters('cuisine')}>✓ None</button>
            </div>
            <div>
                <h3>Diet</h3>
                <ul>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="gluten-free" name="Gluten Free"></input>
                        <label htmlFor="gluten-free">Gluten Free</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="ketogenic" name="Ketogenic"></input>
                        <label htmlFor="ketogenic">Ketogenic</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="vegetarian" name="Vegetarian"></input>
                        <label htmlFor="vegetarian">Vegetarian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="lacto-vegetarian" name="Lacto-Vegetarian"></input>
                        <label htmlFor="lacto-vegetarian">Lacto-Vegetarian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="ovo-vegetarian" name="Ovo-Vegetarian"></input>
                        <label htmlFor="ovo-vegetarian">Ovo-Vegetarian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="vegan" name="Vegan"></input>
                        <label htmlFor="vegan">Vegan</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="pescetarian" name="Pescetarian"></input>
                        <label htmlFor="pescetarian">Pescetarian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="paleo" name="Paleo"></input>
                        <label htmlFor="paleo">Paleo</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="primal" name="Primal"></input>
                        <label htmlFor="primal">Primal</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="low-FODMAP" name="Low FODMAP"></input>
                        <label htmlFor="low-FODMAP">Low FODMAP</label>
                    </li>
                    <li>
                        <input type="checkbox" className='diet-input' onChange={() => updateFilterArray('diet')} id="whole30" name="Whole30"></input>
                        <label htmlFor="whole30">Whole30</label>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Intolerances</h3>
                <ul>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="dairy" name="Dairy"></input>
                        <label htmlFor="dairy">Dairy</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="egg" name="Egg"></input>
                        <label htmlFor="egg">Egg</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="gluten" name="Gluten"></input>
                        <label htmlFor="gluten">Gluten</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="grain" name="Grain"></input>
                        <label htmlFor="grain">Grain</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="peanut" name="Peanut"></input>
                        <label htmlFor="peanut">Peanut</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="seafood" name="Seafood"></input>
                        <label htmlFor="seafood">Seafood</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="sesame" name="Sesame"></input>
                        <label htmlFor="sesame">Sesame</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="shellfish" name="Shellfish"></input>
                        <label htmlFor="shellfish">Shellfish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="soy" name="Soy"></input>
                        <label htmlFor="soy">Soy</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="sulfite" name="Sulfite"></input>
                        <label htmlFor="sulfite">Sulfite</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="tree-nut" name="Tree Nut"></input>
                        <label htmlFor="tree-nut">Tree Nut</label>
                    </li>
                    <li>
                        <input type="checkbox" className='intolerances-input' onChange={() => updateFilterArray('intolerances')} id="wheat" name="Wheat"></input>
                        <label htmlFor="wheat">Wheat</label>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Exclude</h3>
                <ul>
                    <li>
                        <input type="checkbox" className='exclude-input' onChange={() => updateFilterArray('exclude')} id="banana" name="Banana"></input>
                        <label htmlFor="banana">Banana</label>
                    </li>
                    <li>
                        <input type="checkbox" className='exclude-input' onChange={() => updateFilterArray('exclude')} id="mayonnaise" name="Mayonnaise"></input>
                        <label htmlFor="mayonnaise">Mayonnaise</label>
                    </li>
                    <li>
                        <input type="checkbox" className='exclude-input' onChange={() => updateFilterArray('exclude')} id="mustard" name="Mustard"></input>
                        <label htmlFor="mustard">Mustard</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filters;