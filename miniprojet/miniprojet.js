let mainBtn = document.getElementsByClassName("main-btn");
let submenus = document.getElementsByClassName("submenu");
for(let i = 0; i < submenus.length; i++)
{
    
    mainBtn[i].addEventListener("click", function()
    {
        submenus[i].classList.toggle("close");
        
    });
}

window.addEventListener("DOMContentLoaded", function(){
    // tout le reste de mon script
});