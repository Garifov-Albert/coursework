<?php
require 'includes/connectdb.php';
unset($_SESSION['logged_user']);
header('Location: /');
?>