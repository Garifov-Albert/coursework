<!doctype html>
<html lang="ru">
  <head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
  
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/bootstrap.css">
   
    
    
    <title>D:\Planner login</title>
  </head>
  <body>
<section id="login">
  <div class="container loginContainer">
    <p class="loginTitle">D:\Planner</p>
      <div class="loginLogo">
        <img src="img/logo.png" class='logoImg' alt="">
      </div>
      <div class="loginBox">
        <input class='loginEmail' placeholder='Login' type="text">
        <input class='loginPassword'  placeholder='Password' type="text">
        <button class="loginBtn">Вход</button>
      </div>
  </div>
</section>
<?php
include 'includes/connectdb.php';
$query = "SELECT * FROM `users`";
$query = mysqli_query($link, $query);
$query = mysqli_fetch_array($query);
var_dump($query);
?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>

    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</html>