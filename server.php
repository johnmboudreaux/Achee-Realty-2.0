<?php

  // This check relies on there being an <input> with the name 'submit' in your form.
  // i.e. <input type="submit" name="submit">Send Form</input>

    // $to = "johnmboudreaux@gmail.com";
    // $subject = "New Message From Achee Realty Services";
    //
    // // Create new fields here for each field in your form.
    // // Ideally you would want some validation here too.
    // $field1 = $_POST['field1'];
    // $field2 = $_POST['field2'];
    // $field3 = $_POST['field3'];
    // $field4 = $_POST['field4'];
    // $headers = "From: applications@yourwebsite.com\n";
    //
    // $message = "Field 1: $field1\nField 2: $field2\nField 3: $field3\nField 4: $field4\n";
    //
    // echo "Form Sent";
    // mail($to, $subject, $message, $headers);
    header("content-type:application/json");
    echo var_dump($_POST)
?>
