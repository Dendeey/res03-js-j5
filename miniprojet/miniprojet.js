    

window.addEventListener("DOMContentLoaded", function(){
    
    let mainBtn = document.getElementsByClassName("main-btn");
    let submenus = document.getElementsByClassName("submenu");
    for(let i = 0; i < submenus.length; i++)
    {
        
        mainBtn[i].addEventListener("click", function()
        {
            submenus[i].classList.toggle("close");
        });
    }
    
    let asideBtn = document.getElementById("side-menu-btn");
    let asideHidden = document.getElementById("aside-hidden");
    let mainSection = document.querySelector("body > main > section");
    let sectionBorderNone = document.querySelector("#header-section");
    asideBtn.addEventListener("click", function()
    {
        asideHidden.classList.toggle("close");
        mainSection.classList.toggle("style");
        sectionBorderNone.classList.toggle("border-right");
        
    });
    
});