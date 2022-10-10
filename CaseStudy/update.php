<?php
$servername = "127.0.0.1";
$username = "root";
$password = "absol359";
$dbname = "coffeejam";


$javap1 = $_POST["javap"];
$cafesp2 = $_POST["cafesp"];
$cafedp3 = $_POST["cafedp"];
$cappsp4 = $_POST["cappsp"];
$cappdp5 = $_POST["cappdp"];

// echo "button click";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}

$sql = ("INSERT INTO menuprice (Javap, Cofesp, Cofedp, Cappsp, cappdp) VALUES ('$javap1', '$cafesp2', '$cafedp3', 'cappsp4', 'cappdp5')");

if($conn->query($sql) == TRUE){
	echo"Price updated";
}
else{
	echo"Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>