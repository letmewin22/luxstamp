<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$data = (array) json_decode($_REQUEST["param"]);

$token = '1416265840:AAFFHErI16_6us8FiYUVU-R4hdCRESQn3Dk';
$chat_id = '-416696206';

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


// var_dump($arr);
    
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

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