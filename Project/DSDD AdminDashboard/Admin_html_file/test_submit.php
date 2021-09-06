<?php




if( isset($_POST['check_list']) && is_array($_POST['check_list']) ) {

    $url_list = "null";
    

    foreach($_POST['check_list'] as $item){
      // query to delete where item = $item
        //echo $item;
        //echo '<br>';
        $url_list = $url_list.",".$item;
        
    }
    
    
    //echo $url_list;
    
    $cmd_str = 'python web_scrapper.py '." ".$url_list;
    
$command = escapeshellcmd($cmd_str);
                $output = shell_exec($command);
                echo $output;
  echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Registration Sucessful')
    window.location.href='addScrapLinks.php';
    </SCRIPT>");  
    
}

?>