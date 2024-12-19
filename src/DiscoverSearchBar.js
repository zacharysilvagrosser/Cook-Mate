import {useEffect} from 'react';

function DiscoverSearchBar(props) {
    // variable to prevent data from fetching immediately on page load
    let searchClick = false;

    const fetchRecipes = async (userInput, offset) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&cuisine=${props.cuisine}&diet=${props.diet}&intolerances=${props.intolerances}&excludeIngredients=${props.exclude}&number=100&offset=${offset}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        props.setData(jsonData.results);
    }
    useEffect(() => {
        if (searchClick) {
            fetchRecipes(document.getElementById('discover-search').value, props.page);
        }
    }, [props.page]);
    function searchComplexRecipes() {
        searchClick = true;
        props.setPage(0);
        fetchRecipes((document.getElementById('discover-search').value), 0);
    }
    const fetchRandomRecipes = async () => {
        searchClick = true;
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        props.setData(jsonData.results);
    }
    return (
        <div id='search-recipes'>
            <input id='discover-search' type='text' playerholder='Enter a recipe...'></input>
            <button id='discover-search-button' onClick={searchComplexRecipes}>Search</button>
            <button onClick={fetchRandomRecipes}>Random</button>
            <button onClick={fetchRandomRecipes}>Recommened</button>
        </div>
    )
}

export default DiscoverSearchBar;