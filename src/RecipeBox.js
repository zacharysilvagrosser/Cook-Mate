function RecipeBox(props) {
    return (
        <div className="recipe-box">
            {props.data && props.data.map((item, index) => (
                // add random button that generates these items
                <RecipeBox item={item} />
            ))}
            <img src={props.item.image} alt='the recipe'></img>
            <h1>{props.item.title}</h1>
        </div>
    )
}

export default RecipeBox;