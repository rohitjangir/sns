
<?php


$name = $_POST['name'];
file_put_contents('db.txt', $name);
echo "Thank you "; 
echo $name;

?>