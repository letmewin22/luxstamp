<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = $_REQUEST;

$name = strip_tags($data["name"]);
$phone = strip_tags($data["phone"]);
$city = strip_tags($data["city"]);
$delivery = strip_tags($data["delivery"]);
$messanger = strip_tags($data["messanger"]);
$comment = strip_tags($data["comment"]);
$answers = (array) json_decode($data["answers"]);

$nameFieldset = "Ім'я: ";
$phoneFieldset = "Телефон: ";
$cityFieldset = "Місто: ";
$deliveryFieldset = "Вид доставки: ";
$messangerFieldset = "Де зручніше тримати зв'язок: ";
$commentFieldset = "Коментар: ";
$answerFieldset = "Відповіді: ";

$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $cityFieldset => $city,
  $deliveryFieldset => $delivery,
  $messangerFieldset => $messanger,
  $commentFieldset => $comment,
  "<br>".$answerFieldset => "<br>"
);

foreach ($answers as $value) {
  $answer = (array) $value;
  $joinAswer = implode("<br>", $answer["value"]);
  $arr = array_merge($arr, array($answer["title"]=> "<br>".$joinAswer."<br>"));
}

foreach($arr as $key => $value) {
  $txt .= "<strong>".$key."</strong>".$value."<br>";
};


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.adm.tools';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sales@luxstamp.com.ua'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '+m#R6iEx!7B5'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sales@luxstamp.com.ua'); // от кого будет уходить письмо?
$mail->addAddress('lkosteckiy5@gmail.com');     // Кому будет уходить письмо 
$mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка з сайту LuxStamp';
$mail->Body    = $txt;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
?>


