function RecipeInstructions(props) {
    return (
        <div id='recipe-instructions'>
            <h3>Cooking instructions</h3>
            <ol>
                {props.data.analyzedInstructions[0].steps.map((item, index) => (
                    <li key={index}>{item.step}</li>
                ))}
            </ol>
        </div>
    )
}

export default RecipeInstructions;