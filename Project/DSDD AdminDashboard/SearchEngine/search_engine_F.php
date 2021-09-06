<div class='content'>
<?php
 
  function GetTypeByID($ID)
    {
      $query="Select * from type where  ID=$ID;";
        $results=mysql_query($query);
         
        echo mysql_error();
        return $results;
      
    }
@$template_type_id=$_GET['template_type_id']; 
@$template_category_id=$_GET['template_category_id']; 
@$keywords=$_GET['keywords']; 
$subquery=" ";
     
     if($template_type_id=="0"){
      echo "<center> Please choose the type of your style </center>";
     }
     else
     {
      
        
       
if($template_type_id!=0){
 $Type=GetTypeByID($template_type_id);
   $TypeName=mysql_result( $Type,0,'TYPE_NAME');
   $folderpath="stylesdata/".$TypeName."/";
    $subquery= $subquery."where ID = ".$template_type_id;
     
    if(!$template_category_id==0){
        $subquery= $subquery." and CATEGORY = '".$template_category_id."'";
    }
    if(!($keywords==""||$keywords==" - Keywords -")){
    $subquery= $subquery." and STYLE_NAME like '%".$keywords."%'";
    }
}else if(!$template_category_id==0){
        $subquery= $subquery." where CATEGORY = '".$template_category_id."'";
     
    if(!($keywords==""||$keywords==" - Keywords -")){
    $subquery= $subquery." and STYLE_NAME like '%".$keywords."%'";
    }
}else if(!($keywords==""||$keywords==" - Keywords -")){
    $subquery= $subquery." where STYLE_NAME like '%".$keywords."%'";
}
 
 
$query=" SELECT * FROM styles ".$subquery;
//echo"$query";
$result=mysql_query($query);
echo mysql_error();
$num=mysql_num_rows($result);
   if($num=="0")
   {
    echo "<br/><center><h4>Sorry, No results found</h4></center><br/>"; 
    }     
    else
    {
$i=0;
echo "<br/><h4>Search results:</h4><br/>"; 
echo"<br/><table border=0 cols=%100>";
   
while($noticia = mysql_fetch_array($result))
{
 
 
$image= $folderpath."images/".$noticia['STYLE_ID'].".PNG";
$file= $folderpath."uploads/".$noticia['STYLE_NAME']."_".$noticia['STYLE_ID'].".zip";
if(($i%3)==0)
    echo"<tr>";
echo "<td>";      
  
echo " <div class='styleroundcont'>
<div class='styleroundtop'>
     <img src='Template/Images/c1.gif'
     width='15' height='15' class='corner'
     style='display: none' /></div> <center>";
 
echo "<a style='cursor: hand;' href='phpbb3stylesview.php?styleID=$noticia[STYLE_ID]'>
<strong>$noticia[STYLE_NAME]</strong><br />";
echo "<img name='$image' alt='' src='$image'
         border='1'
         style='border-color: 777777;'
         id = 'tpl_$noticia[STYLE_ID]'/></a><br />";
echo" <script type='text/javascript'>
       loadPre('tpl_$noticia[STYLE_ID]', 
         'Template $noticia[STYLE_ID]',
           'http://localhost/mileTemplates2/$image',
         430,
        442  );
    </script>";
echo "Viewed: $noticia[VIEWS]<br />Downloads: $noticia[DOWNLOADS]<br />";
echo " </center><div class='styleroundbottom'>
     <img src='Template/Images/c4.gif'
     width='15' height='15' class='corner'
     style='display: none' /> </div></div>";
echo "</td>";
 
$i++;
if(($i%3)==0)
    echo"</tr>";
 
}
echo"</tr>";
echo"</table>";
echo"<br />";
   }
   }
?>
<div>