let mainBtn = document.getElementsByClassName("main-btn");
let submenus = document.getElementsByClassName("submenu");
for(let i = 0; i < mainBtn; i++)
{
    mainBtn.addEventListener("click", function(event)
    {
        event.target.classList.toggle("open");
        event.target.classList.toggle("close");
        
        for(let i = 0; i < submenus.length; i++)
        {
            submenus[i].classList.toggle("open");
            submenus[i].classList.toggle("close");
        }
    });

}

window.addEventListener("DOMContentLoaded", function(){
    // tout le reste de mon script
});