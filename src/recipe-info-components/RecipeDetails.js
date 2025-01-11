function RecipeDetails(props) {
    const capitalizedDishTypes = props.data.dishTypes.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedOccasions = props.data.occasions.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedDiets = props.data.diets.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    console.log('dawdawd', props.data);
    return (
        <div id='recipe-details'>
            <p>Ready in: {props.data.readyInMinutes} minutes</p>
            {props.data.pricePerServing ? <p>Price per serving: ${(props.data.pricePerServing / 100).toFixed(2)}</p> : <p></p>}
            {props.data.cuisines ? <p>Cuisines: {props.data.cuisines.join(', ')}</p> :
            <p>Cuisines: Global</p>}
            {props.data.occasions ? <p>Occasions: {capitalizedOccasions.join(', ')}</p> :
            <p></p>}
            {props.data.diets ? <p>Diets: {capitalizedDiets.join(', ')}</p> :
            <p></p>}
            {props.data.dishTypes ? <p>Dish Type: {capitalizedDishTypes.join(', ')}</p> :
            <p></p>}
            <p>{props.data.veryHealthy ? 'Healthy' : ''}</p>
            <p>{props.data.cheap ? 'Cheap' : ''}</p>
            <p>{props.data.vegan ? 'Vegan' : ''}</p>
            <p>{props.data.vegetarian ? 'Vegetarian' : ''}</p>
            <p>{props.data.dairyFree ? 'Dairy Free' : ''}</p>
            <p>{props.data.sustainable ? 'Sustainable' : ''}</p>
            <p>{props.data.lowFodmap ? 'Low Fodmap' : ''}</p>
        </div>
    )
}

export default RecipeDetails;