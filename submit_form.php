<?php
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $sender_email = $_POST['email'];
    $message = $_POST['message'];
?>

<?php
    $email_from = '1006shrillpatel@gmail.com';
    $email_subject = "New Contact From Portfolio: $subject";
    $email_body = "You have received a new message from a user named $name.\nHere is the message:\n $message";
?>

<?php
    $to = "1006shrillpatel@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $sender_email \r\n";
    mail($to, $email_subject, $email_body, $headers);
?>