<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
  // if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
   if (isset($_POST['phone_full'])) {$code = $_POST['phone_full'];}
   
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['date'])) {$date = $_POST['date'];}
   // if (isset($_POST['budget'])) {$budget = $_POST['budget'];}
   
    if (isset($_POST['text'])) {$text = $_POST['text'];}
   

    $to = "qwerty22625@gmail.com, energotr07@yandex.ru"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "$email"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> <b>Sender name:</b> $name <br><b>Email:</b> $email <br><b>Phone:</b> $code  <br><b>Message:</b> $text " ;
    $send = mail ($to, $subject, $message, $headers);
    header('Location: /success.html'); //если header то переход на страницу success, и в ней верстается отображение сообщения, if тогда убрать
    /*if ($send == 'true')
    {
    echo '<center><p class="success">Thank you! We will contact you within the next 2 business hours</p></center>';
    sleep(2);
    }
    else 
    {
    echo '<center><p class="fail"><b>Error! Messege not sent</b></p></center>';
    sleep(2);
    }
} else {
    http_response_code(403);
    echo "Try again";
    sleep(2);
}*/
}
?>
 <meta http-equiv="refresh" content="3; url=index.html">