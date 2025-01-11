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
    return (
        <div id='recipe-ingredients'>
            <div id='servings-div'>
                <label htmlFor="quantity">Servings: </label>
                <input type="number" id="servings" name="servings" defaultValue={servings} max="99" onChange={updateServings}></input>
            </div>
            <div id='ingredients-list'>
                <ul>
                    {props.data.extendedIngredients && props.data.extendedIngredients.map((item, index) => (
                        <li key={index}>
                            {item.image ? <img src={'https://spoonacular.com/cdn/ingredients_100x100/' + item.image}></img> : ''}
                            <div>
                                <p> {item.name} {item.meta ? '(' + item.meta[0] + ')' : ''}</p>
                                <span>{formatNumber(item.measures.us.amount * (servings / props.data.servings))}</span>
                                <span> {item.measures.us.unitLong}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                {!props.data.extendedIngredients ? <p>The source website didn't share a set of ingredients. View the recipe website <a href={props.data.sourceUrl} target="_blank">here</a></p> : ''}
            </div>
        </div>
    )
}

export default RecipeIngredients;