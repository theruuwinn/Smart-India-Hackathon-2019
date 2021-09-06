// Reported Files and Also User check in


    firebase.auth().onAuthStateChanged(function(user) {
        var uid =null;
        if (user) {
            // User is signed in.
            uid =user.uid;
        } else {
            // No user is signed in.
            uid=null;
            window.location.replace("login.html");
        }
    });

    $("#signOutBtn").click(
        function()
        {
            firebase.auth().signOut().then(function() {


            },function(error)
            {
                alert(error.message);

            });
        }
    );

//// Checking if the URL is valid or not

//timestamp 

let rootRef = firebase.database().ref().child("ScarpLinks");

    rootRef.on('child_added',snap => {
       
        let url = snap.child("URL").val();
        let fileType = snap.child("FileType").val();
        let timeStamp = snap.child("timestamp").val();
    
        $("#tableBody").append("<tr><td>"+" " +"</td><td>"+fileType +"</td><td>"+url +"</td><td>"+" "+"</td><td>"+ timeStamp+ "</td></tr>");
        
    });





