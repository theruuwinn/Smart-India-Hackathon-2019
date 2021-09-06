<?php
include 'Conn.php';
flush();
//
//function checkKeys($con,$randStr)
//{
//	$sql = "SELECT * FROM add_officer";  //select column
//	$result = mysqli_query($con,$sql);
//	
//	while($row = mysqli_fetch_assoc($result))
//    {
//		if($row['Officer_Id'] == $randStr)
//        {	//Enter column name
//			$keyExists = true;
//			break;	
//		}	
//		else
//        {
//			$keyExists = false;
//		}
//	}
//
//	return $keyExists;
//}
//
//function generateKey($con)
//{
//    $keyLength = 6;
//    $str = "0123456789";
//    $randStr = substr(str_shuffle($str), 0,$keyLength);
//    $checkKey =	checkKeys($con,$randStr);
//	while($checkKey == true)
//    {
//        $randStr = substr(str_shuffle($str), 0,$keyLength);
//        $checkKey =	checkKeys($con,$randStr);	
//    }
//    return $randStr;
//}
//
//$Officer_Id=generateKey($con);
$First_Name=$_POST['First_Name'];
$Middle_Name=$_POST['Middle_Name'];
$Last_Name=$_POST['Last_Name'];
//$Date=$_POST['Date'];
$Email_Id=$_POST['Email_Id'];
$password1 = $_POST['Pass'];
$password2 = $_POST['Pass_conf'];
if($password1 == $password2)
{
    $Password = $password1;
}
$Mobile_Number=$_POST['Mobile_Number'];
//$Adhaar_no=$_POST['Adhaar_no'];
//$Blood_group=$_POST['Blood_group'];
//$Gender=$_POST['Gender'];
//$Address=$_POST['Address'];
//$City=$_POST['City'];
$Pin_Code=$_POST['Pin_Code'];
$State=$_POST['State'];
$Country=$_POST['Country'];

$query="INSERT INTO ADD_OFFICER(First_Name, Middle_Name, Last_Name, Email_Id, Password, Mobile_Number, Pin_Code, State, Country) VALUES( '$First_Name', '$Middle_Name', '$Last_Name', '$Email_Id', '$Password', '$Mobile_Number','$Pin_Code', '$State', '$Country')";

$result=mysqli_query($con,$query) or die(mysqli_error($con));
echo "Inserted succesfully";
echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Registration Sucessful')
    window.location.href='addPers.html';
    </SCRIPT>");

?>