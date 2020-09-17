<?php
require 'includes/connectdb.php';
if(isset($_SESSION['logged_user']))
{
    echo 'Вы авторизованы, '.$_SESSION['logged_user']->name;
}else{header('Location: http://coursework/login.php');
    exit;}

?>
<br><a href="/logout.php">Выйти</a>
