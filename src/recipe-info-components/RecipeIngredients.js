import {useState} from "react";

function RecipeIngredients(props) {
    const [servings, setServings] = useState(props.data.servings);

    function updateServings(event) {
        setServings(parseInt(event.target.value, 10) || 0);
    }
    function formatNumber(num) {
        const formatted = num.toFixed(2);
        return parseFloat(formatted) === num ? num.toString() : formatted;
    }
    console.log('pp', props.data.extendedIngredients[0].image);
    return (
        <div id='recipe-ingredients'>
            <div id='servings-div'>
                <label htmlFor="quantity">Servings: </label>
                <input type="number" id="servings" name="servings" defaultValue={servings} max="99" onChange={updateServings}></input>
            </div>
            <div id='ingredients-list'>
                <ul>
                    {props.data.extendedIngredients.map((item, index) => (
                        <li key={index}>
                            <p> {item.originalName}</p>
                            <img key={index} src={'https://spoonacular.com/cdn/ingredients_100x100/' + item.image}></img>
                            <div>
                                <span>{formatNumber(item.measures.us.amount * (servings / props.data.servings))}</span>
                                <span> {item.measures.us.unitLong}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecipeIngredients;