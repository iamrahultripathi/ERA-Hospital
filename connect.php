<?php
$name= $_POST['name'];
$email= $_POST['email'];
$fnumber= $_POST['fnumber'];


//Database Connection
$conn= new mysqli('localhost', 'root','', 'hospital');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into enquiry(Name,Email,Number) values(?, ?, ?)");
    $stmt->bind_param('sss',$name, $email, $fnumber);
    $stmt->execute();
    echo "Registration Successfull";
    $stmt->close();
    $conn->close();
}
?>