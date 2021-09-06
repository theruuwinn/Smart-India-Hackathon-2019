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


/*
document.getElementById('checkBtn').addEventListener('click',function(){
   
    let regUr = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    
    let url = document.getElementById('url').value;
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let urlFinal = `${proxy}${url}`;
    let urlCheck = urlExists(urlFinal);
    if(urlCheck === 200)
    {
        document.getElementById('addBtn').style.display = 'inline';
    }
    else
    {
        document.getElementById('addBtn').style.display = 'none';
        alert("The Url is not valid");
    }
    
});

*/




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

//reset Function
function urlExists(testUrl) {
    let http = $.ajax({
        type:"HEAD",
        url: testUrl,
        async: false
    });
    return http.status;
    // this will return 200 on success, and 0 or negative value on error
}
//reset Function

function reset(){
    let urlHTML = document.getElementById('url').value = "";
    let selectType = document.getElementById('selectType').value = "";

}