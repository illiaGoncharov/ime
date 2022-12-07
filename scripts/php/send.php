<?php  
    if(isset($_POST['submit'])) {

        $mailto = "ilia.m.goncharov@gmail.com, kanebero@gmail.com, Julia.boyko@inmedex.ru";  
        $subject = "Новая заявка с сайта IME";
        $subject2 = "Спасибо за вашу заявку!";

        $phone = $_POST['phone']; 
        $name = $_POST['name']; 
        $email = $_POST['email']; 

        // Письма
        $message = "Имя клиента: " . $name . "\n\n" . "Телефон: " . $phone . "\n\n" . "Комментарий / Интересующая процедура: " . $_POST['comment'] . "\n\n" . "E-mail клиента " . $email;
        $message2 = "Здравствуйте, " . $name . "\n\n" . "Cпасибо за вашу заявку! Мы уже начали работать над вашим запросом и свяжемся с вами в ближайшее время";

        // Заголовки 
        $headers = "Отправлено: " . $email; // Сообщенине для IME 
        $headers2 = "Отправлено: " . $mailto; // Сообщение для клиента 
        
        // PHP mailer function
        mail($mailto, $subject, $message, $headers); // This email sent to My address
        mail($email, $subject2, $message2, $headers2); // This confirmation email to client

        echo "Благодарим за заявку,  " . $name . ", в ближайшее время мы с вами свяжемся.";

        header("location:index.html");  
    }

?>