let slider = document.getElementById("slider");
let nextSlide = document.getElementById("next");
let prevSlide = document.getElementById("prev");

nextSlide.onclick = function(){
    slider.style.transform = "translateX(-49%)";
    prevSlide.style.display = "flex";
}
prevSlide.onclick = function(){
    slider.style.transform = "translateX(0%)"
    prevSlide.style.display = "none";
}

let slider1 = document.getElementById("slider1");
let nextSlide1 = document.getElementById("next1");
let prevSlide1 = document.getElementById("prev1");

nextSlide1.onclick = function(){
    slider1.style.transform = "translateX(-49%)";
    prevSlide1.style.display = "flex";
}
prevSlide1.onclick = function(){
    slider1.style.transform = "translateX(0%)"
    prevSlide1.style.display = "none";
}
// ******************user Pop up info
let UserInfo_downArrow1 = document.getElementById("UserInfo_downArrow1");
let userInfo_btn1 = document.getElementById("userInfo_btn1");

UserInfo_downArrow1.onclick = function(){
    if(userInfo_btn1.style.display == "block"){
        userInfo_btn1.style.display = "none";
        UserInfo_downArrow1.style.transform = "rotate(0deg)";
    }else{
        userInfo_btn1.style.display = "block";
        UserInfo_downArrow1.style.transform = "rotate(180deg)";
    }
}