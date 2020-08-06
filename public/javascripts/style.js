var bodyElement = document.getElementsByTagName("body");
var overlay = document.getElementsByClassName("over-lay");

var overLayBtnLine1 = document.getElementsByClassName("toggle-btn-line1");
var overLayBtnLine2 = document.getElementsByClassName("toggle-btn-line2");
var overLayBtnLine3 = document.getElementsByClassName("toggle-btn-line3");

function myFunction() {


  


    bodyElement[0].style.overflow ="hidden"
    if(overlay[0].classList.contains("over-lay-add")){
        overLayBtnLine2[0].style.opacity = "1";

        overlay[0].classList.replace("over-lay-add","over-lay-remove")
        bodyElement[0].style.overflow ="scroll"
        // overlay[0].classList.remove("over-lay-add")
    } else if(overlay[0].classList.contains("over-lay-remove")) {
        overLayBtnLine2[0].style.opacity = "0";

        overlay[0].classList.replace("over-lay-remove","over-lay-add")
        console.log("class removed")
    } 
    else{
        overLayBtnLine2[0].style.opacity = "0";
        overLayBtnLine1[0].style.transform= "[rotate(45deg),transform-origin: 20% 40%;]";

        overlay[0].classList.add("over-lay-add")

    }
    
}