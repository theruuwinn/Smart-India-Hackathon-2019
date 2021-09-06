/// View Reported Issues and  Reported Issues

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

    let ddate = new Date();
    let newDate = "" + ddate;
    console.log(newDate);
    let status;
    let rootRef= firebase.database().ref().child("Issues");

    rootRef.on('child_added',snap =>{

        let email = snap.child("id").val();
        let detail = snap.child("message").val();
        let DDate = snap.child("date").val();


        $("#tableBody").append("<tr><td>" + email+"</td><td>" + detail+ "</td><td>"+ DDate+"</td><td>"+ status+"</td></tr>");

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




