// Reported Files and Also User check in

(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        var uid =null;
        if (user) {
            // User is signed in.
            uid =user.uid;
        } else {
            // No user is signed in.
            uid=null;
            window.location.replace("userLogin.html");
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


}());