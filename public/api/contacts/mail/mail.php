<?php 

require_once('phpmailer/PHPMailerAutoload.php');
require_once('../../mailSetting.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = (array) json_decode($_REQUEST["param"]);

$name = strip_tags($data["name"]);
$phone = strip_tags($data["phone"]);
$answers = strip_tags($data["answers"]);

$nameFieldset = "Ім'я: ";
$phoneFieldset = "Телефон: ";
$answerFieldset = "Питання: ";

$arr = array(
    $nameFieldset => $name,
    $phoneFieldset => $phone,
    $answerFieldset => $answers,
);

  foreach($arr as $key => $value) {
    $txt .= "<strong>".$key."</strong>".$value."<br>";
  };


$mail->isSMTP();
$mail->Host = $host;
$mail->SMTPAuth = true; 
$mail->Username = $username;
$mail->Password = $password;
$mail->SMTPSecure = 'ssl';
$mail->Port = $port;
$mail->setFrom($username);
$mail->addAddress($recipient_mail);
$mail->isHTML(true);

$mail->Subject = 'Заявка з сайту LuxStamp';
$mail->Body    = $txt;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
?>


