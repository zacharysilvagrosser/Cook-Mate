import {useEffect} from 'react';

function DiscoverSearchBar(props) {
    const fetchRecipes = async (userInput, offset) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${userInput}&cuisine=${props.cuisine}&number=100&offset=${offset}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        props.setData(jsonData.results);
    }
    useEffect(() => {
        fetchRecipes(document.getElementById('discover-search').value, props.page);
    }, [props.page]);
    const fetchRandomRecipes = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${process.env.REACT_APP_API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData);
        props.setData(jsonData.results);
    }
    function searchComplexRecipes() {
        props.setPage(0);
        fetchRecipes((document.getElementById('discover-search').value), 0);
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