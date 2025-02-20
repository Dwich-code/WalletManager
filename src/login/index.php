<?php
require_once '../config.php';
// connection to the database
$username = "user";
$password = "password";
$database = "database";
$hostname = "localhost";

$mysqli = new mysqli($hostname, $username, $password, $database);

// check connection
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
?>