<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['contact-name'];
    $email = $_POST['contact-email'];
    $organization = $_POST['contact-organization'];
    $message = $_POST['contact-message'];

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'codebuilders.arg@gmail.com';
    $mail->Password = 'ghososupjmvqyubw';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('codebuilders.arg@gmail.com');
    $mail->Subject = ("$email ($organization)");
    $mail->Body = $message;
    $mail->send();

    header('Location: index.html');
    exit();

}






?>