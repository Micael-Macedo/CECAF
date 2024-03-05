<?php
$to      = 'micael.barbosa@fieb.org.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: micaelm2009@hotmail.com' . "\r\n" .
    'Reply-To: micaelm2009@hotmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>