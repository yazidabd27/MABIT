<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'mabitdz@ouchene-hebergement.dz'; 
    $subject = 'New form submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your submission!';
    } else {
        echo 'There was a problem sending your message. Please try again later.';
    }
} else {
    echo 'This page cannot be accessed directly.';
}
?>
