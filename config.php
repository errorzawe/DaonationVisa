<?php 

//Database name
define('MYSQL_DATABASE','daonation_visa');

//username
define('MYSQL_USER','root');

//password
define('MYSQL_PASSWORD','');

//host
define('MYSQL_HOST','localhost');

//opttion for error showing mode
$pdoOptions = array( 
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
);

//connection code
$pdo = new PDO(
	'mysql:host=' .MYSQL_HOST.';dbname='.MYSQL_DATABASE,
	MYSQL_USER, MYSQL_PASSWORD,
	$pdoOptions
);

?>