import { useLocation } from 'react-router-dom';
import RecipeInstructions from './recipe-info-components/RecipeInstructions';
import RecipeIngredients from './recipe-info-components/RecipeIngredients';
import RecipeDetails from './recipe-info-components/RecipeDetails';
import SimilarRecipes from './recipe-info-components/SimilarRecipes';

function RecipeInfo(props) {
    const location = useLocation();
    const {data} = location.state || {};
    console.log('data', data);
    return (
        <div id='recipe-info'>
            {data && <h2>{data.title}</h2>}
            <div id='recipe-summary' dangerouslySetInnerHTML={{__html: data.summary}} />
            <img src={data.image} alt='the recipe'></img>
            {data && <RecipeDetails data={data}/>}
            {data && <RecipeIngredients data={data}/>}
            {data && <RecipeInstructions data={data}/>}
            {data && <SimilarRecipes data={data} savedRecipes={props.savedRecipes} setSavedRecipes={props.setSavedRecipes}/>}
        </div>
    ); 
}

export default RecipeInfo;