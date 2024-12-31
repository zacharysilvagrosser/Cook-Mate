import {Link} from 'react-router-dom';
import AddRecipe from './recipe-box-components/AddRecipe';

function RecipeBox(props) {
    
    return (
        <div className='recipe-box'>
            <div className='recipe-box-buttons'>
                <AddRecipe savedRecipes={props.savedRecipes} setSavedRecipes={props.setSavedRecipes} item={props.item}/>
                <button>Grocery List+</button>
                <button>Overview</button>
            </div>
            <Link to="/recipeinfo" state={{data: props.item}}>
                <div>
                    <img src={props.item.image} alt='the recipe'></img>
                    <h3>{props.item.title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default RecipeBox;