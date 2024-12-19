function RecipeBox(props) {
    return (
        <div className="recipe-box">
            <img src={props.item.image} alt='the recipe'></img>
            <h3>{props.item.title}</h3>
        </div>
    )
}

export default RecipeBox;