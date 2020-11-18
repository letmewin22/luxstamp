<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$data = (array) json_decode($_REQUEST["param"]);

require_once('./botData.php');
require_once('./telegramFile.php');

$name = strip_tags($data["name"]);
$phone = strip_tags($data["phone"]);
$city = strip_tags($data["city"]);
$delivery = strip_tags($data["delivery"]);
$messanger = strip_tags($data["messanger"]);
$comment = strip_tags($data["comment"]);
$answers = $data["answers"];


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
  "%0A".$answerFieldset => "%0A"
);


foreach ($answers as $value) {
  $answer = (array) $value;
  $arr = array_merge($arr, array($answer["title"]=> "%0A".$answer["value"]."%0A"));
}

// var_dump($arr);
var_dump($_REQUEST["param"]);
    
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// SendTelFile(file, $token, $chat_id);



if ($sendToTelegram) {
  
  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
header ("Location: /");
}
?>