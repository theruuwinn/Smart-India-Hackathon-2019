
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

let roofRef = firebase.database().ref().child("OfficerData");

roofRef.on('child_added',snap => {

    let name1 = snap.child('firstname').val();
    let name2 = snap.child('lastname').val();

    let name  = name1 + " " + name2;
    let dob = snap.child('dob').val();
    let email = snap.child('email').val();
    let mobile = snap.child('mobile').val().toString();
    let city = snap.child('city').val();
    let pincode = snap.child('pincode').val();
    let state = snap.child('state').val();
    $("#tableBody").append("<tr><td>" +name +"</td><td>"+dob +"</td><td>"+ email+"</td><td>"+ mobile+"</td><td>" + city+"</td><td>"+pincode +"</td><td>" +state +"</td></tr>");

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