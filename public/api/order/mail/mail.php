<?php 

require_once('phpmailer/PHPMailerAutoload.php');
require_once('../../mailSetting.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = $_REQUEST;

$type = strip_tags($data["type"]);
$name = strip_tags($data["name"]);
$phone = strip_tags($data["phone"]);
$city = strip_tags($data["city"]);
$delivery = strip_tags($data["delivery"]);
$messanger = strip_tags($data["messanger"]);
$comment = strip_tags($data["comment"]);
$answers = (array) json_decode($data["answers"]);
$price = strip_tags($data["price"]);

$typeFieldset = "Вид виробу: ";
$nameFieldset = "Ім'я: ";
$phoneFieldset = "Телефон: ";
$cityFieldset = "Місто: ";
$deliveryFieldset = "Вид доставки: ";
$messangerFieldset = "Де зручніше тримати зв'язок: ";
$commentFieldset = "Коментар: ";
$answerFieldset = "Відповіді: ";
$priceFieldset = "Сума до сплати: ";

$arr = array(
  $typeFieldset => $type."<br>",
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $cityFieldset => $city,
  $deliveryFieldset => $delivery,
  $messangerFieldset => $messanger,
  $commentFieldset => $comment,
  "<br>".$priceFieldset => $price,
  "<br>".$answerFieldset => "<br>",
);

foreach ($answers as $value) {
  $answer = (array) $value;
  $joinAswer = implode("<br>", $answer["value"]);
  $arr = array_merge($arr, array($answer["title"]=> "<br>".$joinAswer."<br>"));
}

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
$mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
$mail->isHTML(true);

$mail->Subject = 'Заявка з сайту LuxStamp'.' '.$type.' '.$phone;
$mail->Body    = $txt;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Success';
}
?>


