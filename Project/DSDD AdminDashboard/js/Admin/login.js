

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            var email = $("#loginEmail").val();
            var password = $("#loginPassword").val();


            if (email != "" && password != "") {
                $("#loginProgress").show();
                $("#loginBtn").hide();
                $('#forgetPassword').hide();

                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    $("#loginError").show().text(error.message);
                    $("#loginProgress").hide();
                    $("#loginBtn").show();
                    $('#forgetPassword').show();

                });
            }
        }
    });

    $('.loginBtn').click(
        function() {

            var email = $("#loginEmail").val();
            var password = $("#loginPassword").val();


            if (email != "" && password != "") {
                $("#loginProgress").show();
                $("#loginBtn").hide();
                $('#forgetPassword').hide();

                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    $("#loginError").show().text(error.message);
                    $("#loginProgress").hide();
                    $("#loginBtn").show();
                    $('#forgetPassword').show();

                });
            }
        }
    );
    firebase.auth().onAuthStateChanged(function(user) {
        var uid =null;
        if (user) {
            // User is signed in.
            uid =user.uid;
            window.location.replace("admin.php");
        } else {
            // No user is signed in.
            uid=null;
        }
    });