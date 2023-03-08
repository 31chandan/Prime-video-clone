// signup form validation
let Name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let Re_pass = document.getElementById("re_pass");
// let patrn =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let flag = 1;


function validate() {
    if (Name.value == 0) {
        document.getElementById("Vname").innerHTML = "*Enter your name!";
        flag = 0;
    }
    else if (Name.value.length > 10) {
        document.getElementById("Vname").innerHTML = "*name should be 10 char!";
        flag = 0;
    } else {
        document.getElementById("Vname").innerHTML = "";
        flag = 1;
    }
    if (email.value == 0) {
        document.getElementById("VEmail").innerHTML = "*Enter your email!";
        flag = 0;
    }
    else if (email.value.length > 40) {
        document.getElementById("VEmail").innerHTML = "*email should be 40 char!";
        flag = 0;
    }
     else {
        document.getElementById("VEmail").innerHTML = "";
        flag = 1;
    }
    if (pass.value == 0) {
        document.getElementById("VPassword").innerHTML = "*Enter your password!";
        flag = 0;
    }
    else if (pass.value.length < 8) {
        document.getElementById("VPassword").innerHTML = "*password should be 8 char!";
        flag = 0;
    } else {
        document.getElementById("VPassword").innerHTML = "";
        flag = 1;
    }
    if (Re_pass.value == 0) {
        document.getElementById("VRe_pass").innerHTML = "*Enter your same password!";
        flag = 0;
    }
    else if (Re_pass.value != pass.value) {
        document.getElementById("VRe_pass").innerHTML = "*re-enter your same password!";
        flag = 0;
    } else {
        document.getElementById("VRe_pass").innerHTML = "";
        flag = 1;
    }
    if (flag) {
        return true;
    } else {
        return false;
    }
}

//password eye togell********************
let eyeOpen = document.getElementById("eye_open");
let eyeClose = document.getElementById("eye_close");

eyeOpen.onclick = function (){
    pass.type = "text";
    eyeOpen.style.display = "none";
    eyeClose.style.display = "block";
}
eyeClose.onclick = function (){
    pass.type = "password";
    eyeClose.style.display = "none";
    eyeOpen.style.display = "block";
}