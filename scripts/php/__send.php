<?php
if (isset($_POST['submit'])) {
    $to = "ilia.m.goncharov@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    
    $subject = "Form submission";
    // $subject2 = "Copy of your form submission";
    $message = $name . " " . $phone . " Комментарий / Интересующая процедура: " . "\n\n" . $_POST['comment'];
    // $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    mail($to, $subject, $message, $headers);
    // mail($from, $subject2, $message2, $headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
}
?>