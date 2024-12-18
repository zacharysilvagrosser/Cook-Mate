<?php
    $servername = "localhost";
    $username = "zacharygrosser";
    $password = "QazWsxUjm12#";
    $database = "pets";
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if (!$conn) {
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
    echo "Connected to server";
    // Taking all 5 values from the form data(input)
    $pet_name =  $_REQUEST['pet-name'];
    $pet_species = $_REQUEST['pet-species'];
    $pet_color =  $_REQUEST['pet-color'];

    // Performing insert query execution
    // here our table name is college
    $sql = "INSERT INTO GuestPets (name, species, color) VALUES ('$pet_name', '$pet_species','$pet_color')";

    if(mysqli_query($conn, $sql)){
        echo "<h3>data stored in a database successfully." 
            . " Please browse your localhost php my admin" 
            . " to view the updated data</h3>"; 

        echo nl2br("\n$pet_name\n $pet_species\n $pet_color");
    } else {
        echo "ERROR: Hush! Sorry $sql. " 
            . mysqli_error($conn);
    }

    // Close connection
    mysqli_close($conn);
?>