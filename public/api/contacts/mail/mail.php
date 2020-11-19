<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = (array) json_decode($_REQUEST["param"]);

$name = strip_tags($data["name"]);
$phone = strip_tags($data["phone"]);
$answers = strip_tags($data["answers"]);


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.adm.tools';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sales@luxstamp.com.ua'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '+m#R6iEx!7B5'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sales@luxstamp.com.ua'); // от кого будет уходить письмо?
$mail->addAddress('hello@emotion-agency.com');     // Кому будет уходить письмо 
// $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = $name.' '.$phone.' '.$answers;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
?>


