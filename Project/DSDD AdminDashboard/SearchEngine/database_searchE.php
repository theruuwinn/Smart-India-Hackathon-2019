<?php
//require "config.php";           // All database details will be included here 
$TYPE_ID=$_GET['template_type_id']; 
$folderpath="stylesdata/";
switch($TYPE_ID)
{
 
case 1:
$html_title = "PhpBB2 Templates | PhpBB2 Themes | Templates Dragon";
 
break;
 
case 2:
$html_title = "PhpBB3 Templates | PhpBB3 Themes | Templates Dragon";
break;
 
default :
$html_title = "PhpBB Templates | PhpBB Themes | Templates Dragon";
break;
 
 
}
 
 $STYLE_CATEGORY=$_GET['template_category_id'];
 $keywords=$_GET['keywords'];
   $pagelink="body/searchbody.php"; 
   include  'Template.php' ; 
 
?>