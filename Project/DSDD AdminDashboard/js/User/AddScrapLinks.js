// Adding Scarp Links
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

document.querySelector('.mybutton').addEventListener(`click`,function(){
    let select = document.getElementById('selectType');
    let selectPrint = select.options[select.selectedIndex].value;
    console.log(selectPrint);

    let url = document.getElementById('url').value;
    let folder = document.getElementById('folder').value;

    let rootRef = firebase.database().ref();

    rootRef.child("Scrap_Links").push().set({

        url:url,
        folder:folder,
        type: selectPrint,
        id: randomFileID()
    });


});
let randomID = '';

function randomFileID(){
    for(let i = 0;i<4;i++)
    {
       let varI =  Math.floor((Math.random() * 10) + 1);
       randomID = randomID + varI;
    }
    return randomID;
}

let rootRef1 = firebase.database().ref().child("Scrap_Links");

rootRef1.on("child_added", snap => {

    let URL = snap.child("url").val();
    let viewFolder = snap.child("folder").val();
    let viewType = snap.child("type").val();
    let fileID = snap.child("id").val();


    $("#editTable").append("<tr><td>"+ URL +"</td><td>" + viewFolder+"</td><td>" + viewType+ "</td><td>"+ fileID +"</td></tr>");

});



/*
var e = document.getElementById("ddlViewBy");
var strUser = e.options[e.selectedIndex].value;
*/