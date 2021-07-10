<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
  $con=new  mysqli("localhost","root","","playerusers");
  $name=$_POST["name"];
  $message=$_POST["message"];
  if($con){
    $save=$con->query("INSERT INTO myclients(name,message)
    VALUES('$name','$message')");
   echo $save ? "saved":"fail".$con->error;
  }
  else{
    echo $con->error;
  }
  
}