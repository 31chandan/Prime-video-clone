let categoriesNavbar = document.getElementById("categories_navbar");
let CategoriesBox = document.getElementById("Categories_box");

categoriesNavbar.onmouseenter = function(){
    CategoriesBox.style.display = "block";
}
CategoriesBox.onmouseenter = function(){
    CategoriesBox.style.display = "block";
}
categoriesNavbar.onmouseleave = function(){
    CategoriesBox.style.display = "none";
}
CategoriesBox.onmouseleave = function(){
    CategoriesBox.style.display = "none";
}
// ******************user Pop up info
let UserInfo_downArrow = document.getElementById("UserInfo_downArrow");
let userInfo_btn = document.getElementById("userInfo_btn");

UserInfo_downArrow.onclick = function(){
    if(userInfo_btn.style.display == "block"){
        userInfo_btn.style.display = "none";
        UserInfo_downArrow.style.transform = "rotate(0deg)";
    }else{
        userInfo_btn.style.display = "block";
        UserInfo_downArrow.style.transform = "rotate(180deg)";
    }
}