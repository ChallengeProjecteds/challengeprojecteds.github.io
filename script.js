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
const button = document.querySelector('.DM');
button.addEventListener('click',dmOnClick);
