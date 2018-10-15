<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'eusebiu.sutu.c@gmail.com';

    $email_subject = "New form submission";

    $email_body = "User name: $name.\n".
                    "User email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "myfreespace19@gmail.com"

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-to: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");
?>    