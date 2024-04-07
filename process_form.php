<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'mabitdz@ouchene-hebergement.dz'; 
    $subject = 'Nouveau Message De Mabit';
    $body = "Nom: $name\nEmail: $email\nMessage: $message";
    $headers = "De: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Merci Pour Votre Message!';
    } else {
        echo "Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer plus tard.";
    }
} else {
    echo "Cette page n'est pas accessible directement.";
}
?>
