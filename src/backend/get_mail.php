<?php
    require("header.php");
    define("NAME", $_POST['name']);
    define("PHONE", $_POST['phone']);
    define("MAIL", $_POST['email']);
    define("COMM", $_POST['com']);

    $to  = "<pavlova.decorator@gmail.com>, ";
    $to .= "pavlova.decorator@gmail.com>";

    $subject = "Заявка на обратную связь";

    $message = NAME . "  хочет заказать проект. Телефон: " . PHONE . ". Почта: " . MAIL . ". Коментарий: " . COMM;

    $headers  = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From:<decorum@vh285.sweb.ru>\r\n";
    $headers .= "Reply-To: reply-to@example.com\r\n";

    mail($to, $subject, $message, $headers);
?>