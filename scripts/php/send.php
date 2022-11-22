<?php  
 
if(isset($_POST['submit'])) {
    $mailto = "karnebero@gmail.com";  
    $subject = "Новая заявка с сайта IME"
    $phone = $_POST['phone']; 
    $name = $_POST['name']; 
    $comment = $_POST['comment']; 
    $email = $_POST['email']; 

    // Письма
    $message = "Имя клиента: " . $name . "\n"
    . "Телефон: " . $phone . "\n\n"
    . "Комментарий / Интересующая процедура: " . "\n" . $_POST['comment'];
    $message2 = "Здравствуйте, " . $name . "\n"
    . "Cпасибо за вашу заявку! Мы уже начали работать над вашим запросом и свяжемся с вами в ближайшее время" . "\n";

    // $confirmation = "Cообщение успешно отправлено!"; 
    // $confirmation2 = "Cообщение почему-то не удалось отправить :( "; 

    // Заголовки 
    $headers = "Отправлено: " . $email; // Сообщенине для IME 
    $headers2 = "Отправлено: " . $mailto; // Сообщение для клиента 
    
    // PHP mailer function
    mail($mailto, $subject, $message, $headers); // This email sent to My address
    mail($email, $confirmation, $message2, $headers2); // This confirmation email to client
    
    // if ($result1 && $result2) {
    // $success =  $confirmation;
    // } else {
    // $failed = $confirmation2;
    // }

}
?>