import {Link} from 'react-router-dom';

function RecipeBox(props) {
    return (
        <Link to="/recipeinfo" state={{data: props.item}}>
            <div className="recipe-box">
                <img src={props.item.image} alt='the recipe'></img>
                <h3>{props.item.title}</h3>
            </div>
        </Link>
    )
}

export default RecipeBox;