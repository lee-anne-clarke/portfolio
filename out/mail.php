<?php 
	$name = $_POST['contactName'];
	$email = $_POST['contactEmail'];
	$website = $_POST['contactWebsite'];
	$message = $_POST['contactMsg'];
	$formcontent="Name: $name \n\nEmail: $email \n\nWebsite: $website \n\nMessage: $message";
	$recipient = "lac@lee-anne-clarke.com";
	$subject = "Contact Form from LAC.com";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Sorry, there has been an error. Please resubmit the form.");
	header('location: /');
	exit;
?>