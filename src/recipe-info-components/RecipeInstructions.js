// if no instructions link the website that the recipe is on

function RecipeInstructions(props) {
    return (
        <div id='recipe-instructions'>
            <h3>Cooking instructions</h3>
            <ol>
                {props.data.analyzedInstructions && props.data.analyzedInstructions[0].steps.map((item, index) => (
                    <li key={index}>{item.step}</li>
                ))}
            </ol>
            {!props.data.analyzedInstructions ? <p>The source website didn't share a set of instructions. View the recipe website <a href={props.data.sourceUrl} target="_blank">here</a></p> : ''}
        </div>
    )
}

export default RecipeInstructions;