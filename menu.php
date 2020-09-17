<?php
/*
require 'includes/connectdb.php';
if(isset($_POST['logout']))
{
    header('Location: /logout.php');
    exit;
}
*/
?>

<!doctype html>
<html class='menuHtml' lang="ru">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/main.css">
<head>
	<title>Menu</title>
</head>

<body id='Mainmenu'>

    <div class="menu">
        <div class="menuLine">
        <p class="menuTitle">D:\Planner</p>
        <img src="img/logo.png" class='menuLogo' alt="">
    </div>
    <button class='menuMenu'><img src="img/menu.png" alt=""></button>
        <form action="menu.php" method="post">
    <div class="menuBox">
        <a class="menuCol">
            <img src="img/day.png" alt="Day" class="menuIcon">
            <p class="menuName">День</p>
        </a>
        <a class="menuCol">
            <img src="img/plan.png"   alt="Plan" class="menuIcon">
            <p class="menuName">Запланировано</p>
        </a>
        <a class="menuCol">
            <img src="img/favourite.png" alt="favourite" class="menuIcon">
            <p class="menuName">Избранные</p>
        </a>
        <a class="menuCol">
            <img src="img/section.png" alt="section" class="menuIcon">
            <p class="menuName">Разделы</p>
        </a>
        <a class="menuCol">
            <img src="img/bell.png" alt="bell" class="menuIcon">
            <p class="menuName">Напоминание</p>
        </a>
        <a class="menuCol">
            <img src="img/trash.png" alt="trash" class="menuIcon">
            <p class="menuName">Корзина</p>
        </a>
        <a class="menuCol" target="full2" href='login.php' name="logout">
            <img src="img/logout.png" alt="logout" class="menuIcon">
            <p class="menuName menuNameExit">Выйти</p>
        </a>
    </div>
        </form>
    </div>
    <div class="menuSecond"></div>

</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src='js/script.js'></script>
</html>