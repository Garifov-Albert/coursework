<?php
require 'includes/connectdb.php';
if(isset($_SESSION['logged_user']))
{
    header('Location:/menu.php');
    exit;
}else{header('Location: http://coursework/login.php');
    exit;}

?>
<br><a href="/logout.php">Выйти</a>
