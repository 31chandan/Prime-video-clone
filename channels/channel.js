// ******************user Pop up info
let UserInfo_downArrow2 = document.getElementById("UserInfo_downArrow2");
let userInfo_btn2 = document.getElementById("userInfo_btn2");

UserInfo_downArrow2.onclick = function(){
    if(userInfo_btn2.style.display == "block"){
        userInfo_btn2.style.display = "none";
        UserInfo_downArrow2.style.transform = "rotate(0deg)";
    }else{
        userInfo_btn2.style.display = "block";
        UserInfo_downArrow2.style.transform = "rotate(180deg)";
    }
}