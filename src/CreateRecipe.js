import {useState} from 'react';
import IngredientInputs from './create-recipe-components/IngredientInputs';
import InstructionInputs from './create-recipe-components/InstructionInputs';

function CreateRecipe(props) {
    const [userRecipeID, setUserRecipeID] = useState(() => {
        const storedData = localStorage.getItem('savedUserRecipeID');
        return storedData ? JSON.parse(storedData) : 0;
    });
    // load previous recipes before setting it to an empty array if there are none
    const [file, setFile] = useState(() => {
        const storedData = localStorage.getItem('savedImages');
        return storedData ? JSON.parse(storedData) : [];
    });

    function uploadPicture(e) {
        const updatedFile = [...file, URL.createObjectURL(e.target.files[0])];
        setFile(updatedFile);
        localStorage.setItem('savedImages', JSON.stringify([...file, updatedFile]));
    }

    function submitRecipe() {
        setUserRecipeID(userRecipeID - 1);
        localStorage.setItem('savedUserRecipeID', (userRecipeID - 1));
        console.log('recipe id: ', userRecipeID);

        const createdIngredientNames = document.querySelectorAll('.create-ingredient-names');
        const createdIngredientAmounts = document.querySelectorAll('.create-ingredient-amounts');
        const createdIngredientUnits = document.querySelectorAll('.create-ingredient-units');
        const createdIngredientAisles = document.querySelectorAll('.create-ingredient-aisle');
        const ingredientsArray = [];
        
        for (let i = 0; i < createdIngredientNames.length; i++) {
            const ingredientsObject = {
                name: createdIngredientNames[i].value,
                aisle: createdIngredientAisles[i].value,
                measures: {
                    us: {
                        amount: createdIngredientAmounts[i].value,
                        unitLong: createdIngredientUnits[i].value
                    }
                }
            };
            ingredientsArray.push(ingredientsObject);
        }

        const createdInstructions = document.querySelectorAll('.create-instructions');
        const instructionsArray = [];

        createdInstructions.forEach(instruction => {
            instructionsArray.push(
                {
                    step: instruction.value
                }
            );
        });

        const newRecipe = {
            title: document.getElementById('create-title').value,
            summary: document.getElementById('create-summary').value,
            image: file,
            readyInMinutes: document.getElementById('create-ready-in').value,
            cuisines: document.getElementById('create-cuisines').value.split(','),
            occasions: document.getElementById('create-occasions').value.split(','),
            diets: document.getElementById('create-diets').value.split(','),
            dishTypes: document.getElementById('create-dish-types').value.split(','),
            veryHealthy: document.getElementById('create-healthy').checked ? true : false,
            cheap: document.getElementById('create-cheap').checked ? true : false,
            vegan: document.getElementById('create-vegan').checked ? true : false,
            vegetarian: document.getElementById('create-vegetarian').checked ? true : false,
            dariyFree: document.getElementById('create-dairy-free').checked ? true : false,
            sustainable: document.getElementById('create-sustainable').checked ? true : false,
            lowFodmap: document.getElementById('create-low-fodmap').checked ? true : false,
            servings: document.getElementById('create-servings').value,
            extendedIngredients: ingredientsArray,
            analyzedInstructions: [
                {
                    steps: instructionsArray
                }
            ],
            id: (userRecipeID - 1)
        }
        props.setSavedRecipes([...props.savedRecipes, newRecipe]);
        props.setData(props.savedRecipes);
        console.log('dadadad', props.data);
    }

    return (
        <div id='create-recipe-form'>
            <label htmlFor='create-title'>Title: </label>
            <input type='text' id='create-title'></input>
            <label htmlFor='create-summary'>Summary: </label>
            <input type='text' id='create-summary'></input>
            <label htmlFor='create-image' id='create-image'>Image: </label>
            <input type="file" accept="image/*" onChange={uploadPicture}/>
            <label htmlFor='create-ready-in'>Ready-in (mins): </label>
            <input type='text' id='create-ready-in'></input>
            <label htmlFor='create-cuisines'>Cuisines: </label>
            <input type='text' id='create-cuisines'></input>
            <label htmlFor='create-occasions'>Occasions: </label>
            <input type='text' id='create-occasions'></input>
            <label htmlFor='create-diets'>Diets: </label>
            <input type='text' id='create-diets'></input>
            <label htmlFor='create-dish-types'>Dish Types: </label>
            <input type='text' id='create-dish-types'></input>
            <div id='create-details'>
                <label htmlFor='create-healthy'>Healthy: </label>
                <input type='checkbox' id='create-healthy'></input>
                <label htmlFor='create-cheap'>Cheap: </label>
                <input type='checkbox' id='create-cheap'></input>
                <label htmlFor='create-vegan'>Vegan: </label>
                <input type='checkbox' id='create-vegan'></input>
                <label htmlFor='create-vegetarian'>Vegetarian: </label>
                <input type='checkbox' id='create-vegetarian'></input>
                <label htmlFor='create-dairy-free'>Dairy-free: </label>
                <input type='checkbox' id='create-dairy-free'></input>
                <label htmlFor='create-sustainable'>Sustainable: </label>
                <input type='checkbox' id='create-sustainable'></input>
                <label htmlFor='create-low-fodmap'>Low-fodmap: </label>
                <input type='checkbox' id='create-low-fodmap'></input>
            </div>
            <label htmlFor='create-servings'>Servings: </label>
            <input type='number' id='create-servings'></input>
            <label htmlFor='create-ingredients'>Ingredients: </label>
            <IngredientInputs />
            <label htmlFor='create-instructions'>Instructions:</label>
            <InstructionInputs />
            <button id='submit-recipe' onClick={submitRecipe}>Submit</button>
        </div>
    )
}

export default CreateRecipe;