<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
$docx_file_name = $_POST['docx_file_name'];
$patient_name = $_POST['patient_name'];
$date = $_POST['date'];
$txt_file_name = $_POST['txt_file_name'];
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'diva.sicom.mails@gmail.com';                 // SMTP username
    $mail->Password = 'kX7RB2n3j2';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('diva.sicom.mails@gmail.com', ' Diva Mail Delivery');
    //$mail->addAddress('stas@sicom.pro', 'Developer');     // Add a recipient
    $mail->addAddress('harleypsychiatrists@gmail.com');               // Name is optional
    $mail->addReplyTo('stas@sicom.pro', 'Developer');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('./reports/'.$docx_file_name);         // Add attachments
    $mail->addAttachment('./reports/'.$txt_file_name);     // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'DIVA.'.$patient_name.'.'.$date;
    $mail->Body    = 'Data from DIVA';
    $mail->AltBody = 'Data from DIVA';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}


//Create a new PHPMailer instance


?>
