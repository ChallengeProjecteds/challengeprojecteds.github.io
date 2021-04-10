function dmOnClick() {
    const body = document.querySelector('body');
    if(body.style.backgroundColor == 'black')
    {
        //body.style.opacity = 1;
        body.style.removeProperty('background-color');
    }
    else
    {
        //body.style.opacity = 0.5;
        body.style.backgroundColor = 'black';
    }
    //body.style.backdrop-filter = bribrightness(0.5);
    //if(body.style.backdrop-filter)//bu özellikler çalışmıyor javascriptte
}
const button = document.querySelector('.dark-mode-button');
button.addEventListener('click',dmOnClick);

function toggleNav() {
    if (document.getElementById("mySidebar").style.width == "250px") {
        document.getElementById("baslik").style.left = "0px"
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    } 
    else {
        document.getElementById("baslik").style.left = "250px";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}