import {useState, useEffect} from 'react';
import RecipeBox from '../RecipeBox';

function SimilarRecipes(props) {
    const recipeIDs = [];
    const [similarData, setSimilarData] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${props.data.id}/similar?number=5&apiKey=${process.env.REACT_APP_API_KEY}`);
            const jsonData = await response.json();
            console.log('JSONDATA: ', jsonData);
            jsonData.map(data => recipeIDs.push(data.id))
            console.log('recipeIDs: ', recipeIDs);
            const newResponse = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIDs}&apiKey=${process.env.REACT_APP_API_KEY}`);
            const newJsonData = await newResponse.json();
            setSimilarData(newJsonData);
            console.log('similar data: ', newJsonData);
            return;
        }
        fetchRecipes();
    }, []);
    return (
        <div id='similar-recipe-container'>
            {similarData && similarData.map((item, index) => (
                <RecipeBox item={item} key={index} data={similarData} savedRecipes={props.savedRecipes} setSavedRecipes={props.setSavedRecipes}/>
            ))}
        </div>
    )
}

export default SimilarRecipes;