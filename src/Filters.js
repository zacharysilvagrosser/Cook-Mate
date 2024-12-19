function Filters(props) {
    function updateCuisine() {
        const checkedCuisine = document.querySelectorAll('input[class=cuisine-input]:checked');
        const activeCuisine = [];
        checkedCuisine.forEach(cuisine => {
            activeCuisine.push(cuisine.name);
        });
        console.log(activeCuisine.join(', '));
        props.setCuisine(activeCuisine.join(','));
    }
    function checkCuisine() {
        document.querySelectorAll('.cuisine-input').forEach(cuisine => {
            cuisine.checked = true;
        });
    }
    function uncheckCuisine() {
        console.log(document.querySelectorAll('.cuisine-input'));
        document.querySelectorAll('.cuisine-input').forEach(cuisine => {
            cuisine.checked = false;
        });
    }
    return (
        <div id='filters'>
            <div>
                <h3>Cuisine</h3>
                <ul>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="african" name="African" defaultChecked></input>
                        <label htmlFor="african">African</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="asian" name="Asian" defaultChecked></input>
                        <label htmlFor="asian">Asian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="american" name="American" defaultChecked></input>
                        <label htmlFor="american">American</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="british" name="British" defaultChecked></input>
                        <label htmlFor="british">British</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="cajun" name="Cajun" defaultChecked></input>
                        <label htmlFor="cajun">Cajun</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="caribbean" name="Caribbean" defaultChecked></input>
                        <label htmlFor="caribbean">Caribbean</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="chinese" name="Chinese" defaultChecked></input>
                        <label htmlFor="chinese">Chinese</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="eastern-european" name="Eastern European" defaultChecked></input>
                        <label htmlFor="eastern-european">Eastern European</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="european" name="European" defaultChecked></input>
                        <label htmlFor="european">European</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="french" name="French" defaultChecked></input>
                        <label htmlFor="french">French</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="german" name="German" defaultChecked></input>
                        <label htmlFor="german">German</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="greek" name="Greek" defaultChecked></input>
                        <label htmlFor="greek">Greek</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="indian" name="Indian" defaultChecked></input>
                        <label htmlFor="indian">Indian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="irish" name="Irish" defaultChecked></input>
                        <label htmlFor="irish">Irish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="italian" name="Italian" defaultChecked></input>
                        <label htmlFor="italian">Italian</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="japanese" name="Japanese" defaultChecked></input>
                        <label htmlFor="japanese">Japanese</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="jewish" name="Jewish" defaultChecked></input>
                        <label htmlFor="jewish">Jewish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="korean" name="Korean" defaultChecked></input>
                        <label htmlFor="korean">Korean</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="latin-american" name="Latin American" defaultChecked></input>
                        <label htmlFor="latin-american">Latin American</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="mediterranean" name="Mediterranean" defaultChecked></input>
                        <label htmlFor="mediterranean">Mediterranean</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="mexican" name="Mexican" defaultChecked></input>
                        <label htmlFor="mexican">Mexican</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="middle-eastern" name="Middle Eastern" defaultChecked></input>
                        <label htmlFor="middle-eastern">Middle Eastern</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="nordic" name="Nordic" defaultChecked></input>
                        <label htmlFor="nordic">Nordic</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="southern" name="Southern" defaultChecked></input>
                        <label htmlFor="southern">Southern</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="spanish" name="Spanish" defaultChecked></input>
                        <label htmlFor="spanish">Spanish</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="thai" name="Thai" defaultChecked></input>
                        <label htmlFor="thai">Thai</label>
                    </li>
                    <li>
                        <input type="checkbox" className='cuisine-input' onChange={updateCuisine} id="vietnamese" name="Vietnamese" defaultChecked></input>
                        <label htmlFor="vietnamese">Vietnamese</label>
                    </li>
                </ul>
                <button id='cuisine-check-all' onClick={checkCuisine}>✓ All</button>
                <button id='cuisine-check-none' onClick={uncheckCuisine}>✓ None</button>
            </div>
            <div>
                <h3>Diet</h3>
                <ul>
                    <li>Gluten Free</li>
                    <li>Ketogenic</li>
                    <li>Vegetarian</li>
                    <li>Lacto-Vegetarian</li>
                    <li>Ovo-Vegetarian</li>
                    <li>Vegan</li>
                    <li>Pescetarian</li>
                    <li>Paleo</li>
                    <li>Primal</li>
                    <li>Low FODMAP</li>
                    <li>Whole30</li>
                </ul>
            </div>
            <div>
                <h3>Intolerances</h3>
                <ul>
                    <li>Dairy</li>
                    <li>Egg</li>
                    <li>Gluten</li>
                    <li>Grain</li>
                    <li>Peanut</li>
                    <li>Seafood</li>
                    <li>Sesame</li>
                    <li>Shellfish</li>
                    <li>Soy</li>
                    <li>Sulfite</li>
                    <li>Tree Nut</li>
                    <li>Wheat</li>
                </ul>
            </div>
        </div>
    )
}

export default Filters;