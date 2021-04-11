function dmOnClick() {
    //navbar-dark bg-dark
    //navbar-light bg-light
    //btn-ligt bg-light
    const button = document.querySelector('.dark-mode-button');
    
    if(button.classList.contains('bg-light')) 
    {
        button.classList.remove('bg-light','btn-ligt');
        button.classList.add('bg-dark','btn-dark');
    }
    else
    {
        button.classList.add('bg-light','btn-ligt');
        button.classList.remove('bg-dark','btn-dark');
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