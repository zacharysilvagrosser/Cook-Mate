import {useState, useEffect} from 'react';
import Sorting from './Sorting';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function DiscoverSearchBar(props) {
    // variable to prevent data from fetching immediately on page load
    const [searchClicked, setSearchClicked] = useState(false);

    const fetchRecipes = async (userInput, offset) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&cuisine=${props.cuisine}&diet=${props.diet}&intolerances=${props.intolerances}&excludeIngredients=${props.exclude}&addRecipeInformation=true&number=100&offset=${offset}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        props.setData(jsonData.results);
    }
    useEffect(() => {
        if (searchClicked) {
            fetchRecipes(document.getElementById('discover-search').value, props.page);
        }
    }, [props.page]);
    function searchComplexRecipes() {
        setSearchClicked(true);
        props.setPage(0);
        fetchRecipes((document.getElementById('discover-search').value), 0);
    }
    const fetchRandomRecipes = async () => {
        setSearchClicked(true);
        const allFilters = props.diet.concat(props.intolerances);
        //const filters = allFilters.join(',');
        console.log('allFilters', allFilters);
        console.log('uncheckedFilters', props.noCuisine);
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&include-tags=${allFilters}&exclude-tags=${props.noCuisine}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.recipes);
        props.setData(jsonData.recipes);
    }
    return (
        <div id='discover-search-bar'>
            <div id='discover-search-div'>
                <input id='discover-search' type='text' playerholder='Enter a recipe...'></input>
                <div id='discover-search-button' onClick={searchComplexRecipes}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div id='discover-bottom-search-buttons'>
                <button onClick={fetchRandomRecipes}>Random</button>
                <button onClick={fetchRandomRecipes}>Recommened</button>
            </div>
            <Sorting />
        </div>
    )
}

export default DiscoverSearchBar;