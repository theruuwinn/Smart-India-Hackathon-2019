<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" media="screen"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/addScrapLinks.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="shortcut icon" href="http://www.mospi.gov.in/sites/all/themes/mospi/favicon.ico" type="image/vnd.microsoft.icon" />
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <link rel="stylesheet" href="../css/navbar.css">
  <title>Adding Scrapping Links</title>

</head>

<body>

 <!--    Navbar starts here-->
   
    <nav class="navbar fixed-top navbar-mynavbar">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button onClick="clickCounter()" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><i class="fas fa-desktop"></i> Admin Dasboard </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="admin.php"><i class="fas fa-home"></i>Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" ><i class="fas fa-users-cog"></i> Personnel<span class="caret"></span> </a>
                        <ul id="student" class="dropdown-menu">
                            <li><a href="addPers.html"> <i class="fas fa-user-alt"></i> Add Officers </a></li>
<!--                            <li><a href="ViewOfficerData.html"> <i class="fas fa-briefcase"></i> View Officer Data </a></li>-->
                        </ul>
                    </li>
                    <li><a href="dept.html"><i class="fas fa-building"></i> Department Information </a></li>
                </ul>
                <ul id="signOutBtn" class="nav navbar-nav navbar-right" style="color: white"><li><a href="#">Sign Out <i class="fas fa-sign-out-alt"></i></a></li></ul> 
                <!-- Colored raised button -->
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
   
<!--   Navbar ended-->
    
<!--Main Content Starts-->
   
    <div class="container-fluid">
        <div class="row">
           <!--Sidebar Starts-->
            <div class="col-sm-3 col-md-2 sidebar mained">
                <ul class="nav nav-sidebar">
<!--                    <li><a href="issues.html"><i class="fas fa-exclamation-triangle"></i> Issues</a></li>-->
                </ul>
                <ul class="nav nav-sidebar">
                    <li><a href="dataList.php"><i class="fas fa-file-invoice"></i> Reports</a></li>
                    
                </ul>
                <ul class="nav nav-sidebar">
                    <li><a href="ViewOfficerData.php"><i class="fab fa-connectdevelop"></i> Contact List</a></li>
                </ul>
            </div>      
            <!--Sidebar ended-->
      <!--            Register Content Starts-->
      <div class="col-sm-9 col-md-10 main">
        <h1 class="page-header"><img src="../images/add_data.png" alt="" class="header"> Add Links </h1>
          
          <form action="URL_list.php" method="POST">
            URL: <input id="url" type="text" name="URL" placeholder="URL">
<!--
            Section: <input id="folder" type="text" name="loc" placeholder="Folder Name">
              <td><select size="1" name="Doc_type" placeholder="Document Type" id="selectType">
-->
              
            Document Type: <input id="selectType" type="text" name="Doc_type" placeholder="Document Type">
<!--
                    <option value="xlxs">
                        Excel
                    </option>
                    <option value="pdf">
                        PDF
                    </option>
                    <option value="doc">
                        Worded Document
                    </option>
                    <option value="txt">
                        Text
                    </option>
                    <option value="all">
                        All
                    </option>
                </select></td>
-->
              
            <input type="submit" class="mybutton" value="Add" >
            
        </form>
        <h4 class="page-header">Added Links</h4>
        <div class="containerTable">
        <table class="table table-striped" id ="editTable">
            <thead>
            <tr>
                <th id="turl">URL</th>
                <th id="ttype">Document Type</th>
                <th id="status">Check for Scraping</th>
            </tr>
            </thead>
            <form action='test_submit.php' method='post'>
                <input type = "hidden" value="askjdjaskd" name="test"/>
            <tbody id="tableBody">
                <?php
                    include 'Conn.php';
                    $sql = "SELECT URL, Doc_type from url_list";

                    $result = $con-> query($sql);

                    if ($result) 
                    { 
                        while($row = $result->fetch_assoc()) 
                        {
                            echo "<tr><td>".$row["URL"]."</td><td>".$row["Doc_type"]."</td>";
                            echo "<td><input type='checkbox' name='check_list[]' value = '".$row["URL"]."'></td>";
                            echo '</tr>';
                            
                        }
                        echo "</table>";
                    } 
                    else 
                    {
                        echo "0 results";
                    }
                    

                ?>
            </tbody>
        </table>
    </div>

        <!--                Dashboard Conent ended-->
      </div>
      <!--            Register limit ends-->
            <div style="float: right;margin-top: 10px">

            <input type="submit" value="Save and Go forward" style="background-color: #059;
    color: white;
    padding: 3px 24px;
    border-radius: 5px;"/>
   
                </form>     
                
                
    </div>
        </div>
  </div>

  <!--Main Content Ends-->

  <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase.js"></script>
  <script src="../js/firebase.js"></script>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="../js/Admin/adminScrapLinks.js"></script>
</body>
    

</html>