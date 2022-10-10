<?php
$servername = "127.0.0.1";
$username = "root";
$password = "absol359";
$dbname = "coffeejam";


// echo "button click";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}

$sql = ("SELECT * FROM menuprice by index DESC LIMIT 1");


if($conn->query($sql) == TRUE){

	$javap1 = $row["Javap"];
	$cafesp2 = $row["Cafesp"];
	$cafedp3 = $row["Cafedp"];
	$cappsp4 = $row["Cappsp"];
	$cappdp5 = $row["Cappdp"];

	echo"price: " . $javap1l

}
else{
	echo"Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>