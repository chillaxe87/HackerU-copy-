const mainCoursesList = document.getElementsByClassName("main-courses__list-close");
window.addEventListener('load',()=>{
    if(window.pageYOffset < 800){
        for ( i = 0 ; i < mainCoursesList.length; )
        {
            mainCoursesList[i].className = "main-courses__list-open";
        }
    }
}); 
window.addEventListener('scroll',()=> {
    if(window.pageYOffset < 800){
        for ( i = 0 ; i < mainCoursesList.length; )
        {
            mainCoursesList[i].className = "main-courses__list-open";
        }
    }
});
const reasonToLearn = document.getElementsByClassName("reason-to-learn__section");
window.addEventListener('scroll',()=> {
    if(window.pageYOffset > 600 && window.pageYOffset < 2100 && reasonToLearn.length !=0){
        for ( i = 0 ; i < reasonToLearn.length; )
        {
            reasonToLearn[i].className = "reason-to-learn__section-open";
        }
    }
});
const reasonToLearnH3 = document.getElementsByClassName("reason-to-learn__h3");
window.addEventListener('scroll',()=> {
    if(window.pageYOffset > 550 && window.pageYOffset < 1300 && reasonToLearnH3.length !=0)
    {
        reasonToLearnH3[0].className = "reason-to-learn__h3-open";
    }
});
const procedureContainers = document.getElementsByClassName("hidden")
window.addEventListener('scroll',()=> {
    if(window.pageYOffset > 1800 && window.pageYOffset < 3100 && procedureContainers.length != 0)
    {
        procedureContainers[0].className = "procedure-container__1";
        procedureContainers[0].className = "procedure-container__2";
        procedureContainers[0].className = "procedure-container__3";
        procedureContainers[0].className = "procedure-container__4";
    }
});
// main nav buttons open close
const mainNavButtons = document.getElementsByClassName("main-nav__button-expand");
const mainNavButtonsOpen = document.getElementsByClassName("main-nav__button-expand__open");

var item = "close";
function openNav(number)
{
    if(mainNavButtonsOpen.length == 1){
        mainNavButtonsOpen[0].className = "main-nav__button-expand"
    }
    mainNavButtons[number].className = "main-nav__button-expand__open";
    item = "open";
}
window.addEventListener('click',()=> {
    if(item == "close" && mainNavButtonsOpen.length> 0){
        mainNavButtonsOpen[0].className = "main-nav__button-expand";
    }
    item = "close";
});
// nav expansion on click

function expandMainNav(){
    const navButtons = document.getElementById("nav-buttons")
    const navButton = document.getElementsByClassName("three-line-button")
    if(navButtons.className === "main-nav__buttons"){
        navButtons.className = "main-nav__buttons-clicked";
        navButton[0].className = "three-line-button__top";
        navButton[0].className = "three-line-button__middle";
        navButton[0].className = "three-line-button__bottom";
    }
    else{
        navButtons.className = "main-nav__buttons";
        document.getElementById("top").className = "three-line-button";
        document.getElementById("middle").className = "three-line-button";
        document.getElementById("bottom").className = "three-line-button";
    }
}

