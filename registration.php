<?php
require 'includes/connectdb.php';
$data = $_POST;
if(isset($data['do_signup']))
{
    $error = array();
    if(!filter_var($data['login'],FILTER_VALIDATE_EMAIL))
    {
        $error[] = 'Логин должен быть электронной почтой';
        $login='Логин должен быть электронной почтой';
    }
    if(R::count('users', "login = ?", array($data['login']))>0)
    {
        $error[] = 'Пользователь с таким логином уже существует';
    }
    if(empty($error))
    {
        $users = R::dispense('users');
        $users->login = $data['login'];
        $users->password = password_hash($data['password'],PASSWORD_DEFAULT);
        $users->lastname = $data['lastname'];
        $users->name = $data['name'];
        $users->dateofbirth = $data['date'];
        R::store($users);
        $_SESSION['logged_user'] = $users;
        header('Location: /');
        exit;
    }else
    {
        echo array_shift($error);
    }


}
?>
<!doctype html>
<html lang="ru">
  <head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
  
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css
/bootstrap.css">
   

    <title>D:\Planner registration</title>
  </head>


  <body>
  <form action="registration.php" method="post">
<section id="registr">
  <div class="container registrContainer">
    <div class="registrLine">
      <div class="registrLogo">
       <img src="img/logo.png" class='registrImg' alt="">
      </div>
      <p class="registrTitle">D:\Planner</p>
    </div>
     
    <div class="registrBox">
      <p class="registrHeadline">Регистрация</p>
        <?=$login?>
      <input type="text"placeholder="Логин" class="registrInput firstRegistrInput" name="login" required >
      <input type="password" placeholder="Пароль"class="registrInput" name="password" required >
      <input type="text" placeholder="Фамилия"class="registrInput" name="lastname" required >
      <input type="text" placeholder="Имя"class="registrInput" name="name"required >
      <input type="date" placeholder="День рождение"class="registrInput registrDate" id="date" name="date" required >
      <p class='Birthday'>День рождение</p>
      <button type="submit" class="registrBtn" name="do_signup">Зарегестрироваться</button>
    </div>
  
</section>
  </form>
</body>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>

    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</html>