/// View Reported Issues and  Reported Issues

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

let ddate = new Date();
let newDate = "" + ddate;


document.getElementById('submitBtn').addEventListener('click',function(){

    let emailID = document.getElementById('exampleInputEmail1');
    let issueText = document.getElementById('validationTextarea');

    let emailid = emailID.value;
    let issueMessage = issueText.value;

    let firebaseIssues = firebase.database().ref();

    firebaseIssues.child("Issues").push().set({
        id:emailid,
        message: issueMessage,
        date:newDate,
        status:status
    });

    alert("Issue Recorded");
    reset();
});

function  reset() {
    document.getElementById('exampleInputEmail1').value="";
    document.getElementById('validationTextarea').value = "";

}
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




