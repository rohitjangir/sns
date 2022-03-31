<?php

$server = "localhost";
$username = "rohit";
$password = "hhhhhhhhack";
$dbname = "data";

$con = mysqli_connect($server, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "Success";
}
$name = $_POST['name'];
$sql = "INSERT INTO form (UserName) VALUES ('$name')";
if($con->query($sql) == true){
    echo "Successfully inserted";}
else{
    echo "Error: $sql <br> $con->error";
}


$con->close();

?>