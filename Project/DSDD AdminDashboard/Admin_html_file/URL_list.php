<?php

include 'Conn.php';
flush();

$URL=$_POST['URL'];

$Doc_type=$_POST['Doc_type'];

/*
$file_headers = @get_headers($file);
if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
        echo "<script type='text/javascript'>alert('Invalid URL');</script>";
    echo ("<SCRIPT LANGUAGE='JavaScript'>
                        window.location.href='addScrapLinks.php';
                        </SCRIPT>");

}
else {
    
    $query="INSERT INTO url_list(URL, Doc_type) VALUES('$URL','$Doc_type')";
    
    
$result=mysqli_query($con,$query) or die(mysqli_error($con));

echo ("<SCRIPT LANGUAGE='JavaScript'>
                        window.alert('Added Sucessful')
                        window.location.href='addScrapLinks.php';
                        </SCRIPT>");
  }
  */
/*

$url_headers = @get_headers($URL);
 if(strpos($url_headers[0],'200'))
 {
$query="INSERT INTO url_list(URL, Doc_type) VALUES('$URL','$Doc_type')";
    
    
$result=mysqli_query($con,$query) or die(mysqli_error($con));

echo ("<SCRIPT LANGUAGE='JavaScript'>
                        window.alert('Added Sucessful')
                        window.location.href='addScrapLinks.php';
                        </SCRIPT>");     
 }
 else 
 {
      echo "<script type='text/javascript'>alert('Invalid URL');</script>";
    echo ("<SCRIPT LANGUAGE='JavaScript'>
                        window.location.href='addScrapLinks.php';
                        </SCRIPT>");
  
 }

*/
$query="INSERT INTO url_list(URL, Doc_type) VALUES('$URL','$Doc_type')";
    
    
$result=mysqli_query($con,$query) or die(mysqli_error($con));

echo ("<SCRIPT LANGUAGE='JavaScript'>
                        window.alert('Added Sucessful')
                        window.location.href='addScrapLinks.php';
                        </SCRIPT>");     



?>