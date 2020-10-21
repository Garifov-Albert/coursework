<?php

require 'includes/connectdb.php';
$data =  $_POST;
if(isset($data['do_login']))
{
    $error = array();
    $user = R::findOne('users','login = ?', array($data['login']));
    if ($user)
    {

        if(password_verify($data['password'],$user->password))
        {
            $_SESSION['logged_user'] = $user;
            header('Location: /');
            exit;
        }
        else{$error[] = 'Ошибка2';}
    }else{$error[] = 'Ошибка1';}
    if(!empty($error)){echo array_shift($error);}
}

?>

<!doctype html>
<html lang="ru">
  <head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.css">



    <title>D:\Planner login</title>
  </head>
  <body>


  <form action="login.php" method="post">
<section id="login">
  <div class="container loginContainer">
    <p class="loginTitle">D:\Planner</p>
      <div class="loginLogo">
        <img src="img/logo.png" class='logoImg' alt="">
      </div>
      <div class="loginBox">
        <input class='loginEmail' placeholder='Login' type="text" name="login" required>
        <input class='loginPassword'  placeholder='Password' type="password" name="password" required>
        <a  type="submit"  href='main-window.php' class="loginBtn" name = "do_login">Войти</a>
        <a class='logrRegistrBtn' target="_self" href='registration.php'>Зарегестрироваться</a
      </div>
  </div>
</section>
  </form>
  </body>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>  
    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
</html>