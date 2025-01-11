import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
// My Recipes: Show saved recipes, save recipes for what you plan to make this week (show entire list of ingreients needed for grocery trip), Favorites section, sorting buttons, create own recipe
// click on recipe to show all information about it, recipe suggestions (similar)

// 

function NavBar(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container id='nav'>
                <Nav id='nav-items'>
                    <Link to='/'>My Recipes {'(' + props.savedRecipes.length + ')'}</Link>
                    <Link to='/discoverrecipes'>Discover Recipes</Link>
                    <Link to='/grocerylist'>Grocery List</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;