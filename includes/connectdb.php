<?php
define("db_host", "localhost");
define("db_user", "root");
define("db_pasw", "root");
define("db_name", "coursework");
$link = mysqli_connect(db_host, db_user, db_pasw) or die(mysqli_error());
mysqli_select_db($link, db_name) or die(mysqli_error());
