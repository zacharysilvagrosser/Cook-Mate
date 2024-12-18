<!--
COOK BOOK
add recipes from API or created user recipes
recipe suggestions (similar and random)
List recipe ((vegan, cheap etc.), cuisines, cook time/prep time/readyinminutes, dish type, ingredients, occasions) servings math, summary
sorting functions (by meat, soup veggie, carb-free, country)
Favorites section
Carb tracker per recipe (input which ingredients are in recipe then add the contents of those ingredients together to show recipe nutrition facts)
API Key: b892596c76b44ca6b6ab19f28c33a277
REACT framework, use PHP to add recipe data into RECIPES mysql table
-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
    <div class="menu">
        <?php 
            include 'menu.php';
        ?>
    </div>
    <h1>Storing Form data in Database</h1>
    <form action="/insert.php" method="post">

        <label for="pet-name">Pet Name</label>
        <input type="text" id="pet-name" name="pet-name" placeholder="Enter pet name...">

        <label for="pet-species">Species</label>
        <select id="pet-species" name="pet-species">
            <option>Cat</option>
            <option>Dog</option>
            <option>Bird</option>
            <option>Rodent</option>
        </select>

        <label for="pet-color">Color</label>
        <select id="pet-color" name="pet-color">
            <option>Brown</option>
            <option>White</option>
            <option>Black</option>
            <option>Gray</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Multi-colored</option>
        </select>

        <input type="submit" value="Submit">

    </form>
</body>
</html>