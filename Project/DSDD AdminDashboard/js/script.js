//alert("We may use cookies to optimize our site. By continuing, you agree to our use of cookies.");

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
let pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

document.getElementById('resetBtn').addEventListener('click',function(){
    reset();

});

function submit(){
    check();
       dataOnDatabase();

}

function check(){

    let checkVal = false;

    if(document.querySelector('.firstName').value ==="")
    {
        document.getElementById('firstName').textContent = "This Field is compulsory";
        checkVal = false;
    }
    else
    {
        document.getElementById('firstName').textContent = "";
        checkVal = true;
    }
    /////
    if(document.querySelector('.lastName').value  ==="")
    {
        document.getElementById('lastName').textContent = "This Field is compulsory";
        checkVal = false;
    }
    else
    {
        document.getElementById('lastName').textContent = "";
        checkVal = true;
    }
    ///////////////DOB/////////////////////
    if(document.querySelector('.dob').value === "")
    {
        document.getElementById('DOB').textContent = "This field is compulsory";
        checkVal = false;
    }
    else
    {
        document.getElementById('DOB').textContent = "";
        checkVal = true;
    }
    /////////////////////email
    let reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if(!reg.test(document.querySelector('.email').value) )
    {
        document.getElementById('email').textContent = "Email is invalid";
        checkVal = false;

    }
    else
    {
        document.getElementById('email').textContent = "";
        checkVal = true;

    }
    ////////// Mobile ///////////////////////////////////////////////////////////
    if(document.querySelector('.mobileNumber').value  ==="")
    {
        document.getElementById('number').textContent = "This Field is compulsory";
        checkVal = false;

    }
    else
    {
        document.getElementById('number').textContent = "";
        checkVal = true;
    }
    if(document.querySelector('.mobileNumber').value.toString().length  < 10)
    {
        document.getElementById('number').textContent = "Mobile Number should not be less than 10 digits";
        checkVal = false;

    }
    else
    {
        document.getElementById('number').textContent = "";
        checkVal = true;
    }
    /////////////////////////////////////////// Aadhar ////////////////////////////
    if(document.querySelector('.aadharCard').value === "")
    {
        document.getElementById('aadhar').textContent = "This Field is compulsary";
        checkVal = false;
    }
    else
    {
        document.getElementById('aadhar').textContent = "";
        checkVal = true;
    }
    if(document.querySelector('.aadharCard').value.toString().length <12)
    {
        document.getElementById('aadhar').textContent = "Aadhar Card must be of 12 Digits";
        checkVal = false;
    }
    else
    {
        document.getElementById('aadhar').textContent = "";
        checkVal = true;
    }
    /////////////////////city//////////////////////////

    if(document.querySelector('.city').value === "")
    {
        document.getElementById('city').textContent = "This field is compulsory";

        checkVal = false;

    }
    else
    {
        document.getElementById('city').textContent = "";
        checkVal = true;

    }
    ///////////////Pincode///////////////////////////

    if( document.querySelector('.pincode').value === "")
    {
        document.getElementById('pin').textContent = "This field is compulsory";
        checkVal = false;

    }
    else
    {
        document.getElementById('pin').textContent = "";
        checkVal = true;

    }

    /////
    if(document.querySelector('.pincode').value.toString().length < 6)
    {
        document.getElementById('pin').textContent = "Pincode must be of 6 digits";
        checkVal = false;

    }
    else
    {
        document.getElementById('pin').textContent = "";
        checkVal = true;

    }


    ///////////State////////////////////

    if(document.querySelector('.state').value === "")
    {
        document.getElementById('state').textContent = "This field if compulsory";
        checkVal = false;

    }
    else
    {
        document.getElementById('state').textContent = "";
        checkVal = true;

    }

    ////////////Password/////////////////
    if(document.querySelector('.password').value.toString() !== document.querySelector('.confirmPassword').value.toString())
    {
        document.getElementById('confirmPassword').textContent = "Confirm Password is not same as Password";
        checkVal = false;

    }
    else
    {
        document.getElementById('confirmPassword').textContent = "";
        checkVal = true;

    }
    return checkVal;

}

function dataOnDatabase(){

    let var1 =   document.querySelector('.firstName').value;
    let var2 = document.querySelector('.password').value.toString();
    //let var2 =  document.querySelector('.middleName').value ;
    let var3 = document.querySelector('.lastName').value;
    let var4 = document.querySelector('.email').value;
    let var5 =   document.querySelector('.mobileNumber').value ;
    let var6 =document.querySelector('.aadharCard').value ;
    //let var7 = document.querySelector('.bloddGorup').value ;
    //let var8 =document.querySelector('.Address').value ;
    let var9 =document.querySelector('.city').value;
    let var10 = document.querySelector('.pincode').value ;
    let var11 =document.querySelector('.state').value ;
    // let var12 = document.querySelector('.country').value;
    let var13 = document.querySelector('.dob').value;

    //Education
console.log(var2);

    let firebaseRef = firebase.database().ref();

    firebaseRef.child("OfficerData").push().set({

        firstname: var1,
        lastname:var3,
        email:var4,
        dob:var13,
        mobile:var5,
        aadhar:var6,
        city:var9,
        pincode:var10,
        state:var11,
        password: var2,
        timestamp:newDate
    });
    alert("Data has been registered");
    reset();


}

function  reset() {
    document.querySelector('.firstName').value ="";
    document.querySelector('.middleName').value = "";
    document.querySelector('.lastName').value="";
    document.querySelector('.email').value="";
    document.querySelector('.mobileNumber').value = "";
    document.querySelector('.aadharCard').value = "";
    document.querySelector('.bloddGorup').value = "";
    document.querySelector('.Address').value = "";
    document.querySelector('.city').value = "";
    document.querySelector('.pincode').value = "";
    document.querySelector('.state').value = "";
    document.querySelector('.country').value = "";
    document.querySelector('.dob').value ="";
    document.querySelector('.password').value = "";
    document.querySelector('.confirmPassword').value = "";

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


