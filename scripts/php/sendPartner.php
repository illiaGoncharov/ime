<?php
if (isset($_POST['submit'])) {

    $mailto = "";
    // Julia.boyko@inmedex.ru
    $subject = "Новая заявка с сайта об обучении в IME";
    $subject2 = "Спасибо за вашу заявку!";

    $phone = $_POST['phone'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Письма
    $message = "ФИО: " . $name . "\n\n" . "Телефон: " . $phone . "\n\n" . "Интересующее обучение: " . $_POST['comment'] . "\n\n" . "E-mail клиента " . $email;
    $message2 = "Здравствуйте, " . $name . "\n\n" . "Cпасибо за вашу заявку! Мы уже начали работать над вашей зааявкой и свяжемся с вами в ближайшее время" . "\n\n" . "С уважением, Медицинский центр IME";

    // Заголовки 
    $headers = "Отправлено:" . $email; // Сообщенине для IME 
    $headers2 = "Отправлено: " . $mailto; // Сообщение для клиента 

    // PHP mailer function
    mail($mailto, $subject, $message, $headers); // This email sent to My address
    mail($email, $subject2, $message2, $headers2); // This confirmation email to client

    // echo "Благодарим за заявку,  " . $name . ", в ближайшее время мы с вами свяжемся.";

    header("location:../../thanks.html");

}
?>