<?php

$servername = "localhost";
$username = "rohit";
$password = "hhhhhhhhack";

// Create a connection
$conn = new mysqli($servername, $username, $password, "data") or die("Unable to connect");
echo "Connection was successful";

// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful";
}

?>