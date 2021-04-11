function dmOnClick() {
    const button = document.querySelector('.dark-mode-button');
    const nav = document.querySelector('nav');
    
    if(button.classList.contains('bg-light')) 
    {
        button.classList.remove('bg-light','btn-ligt');
        button.classList.add('bg-dark','btn-dark');
        nav.classList.add('bg-light','navbar-ligt');
        nav.classList.remove('bg-dark','navbar-dark');
    }
    else
    {
        button.classList.add('bg-light','btn-ligt');
        button.classList.remove('bg-dark','btn-dark');
        nav.classList.remove('bg-light','navbar-ligt');
        nav.classList.add('bg-dark','navbar-dark');
    }
}
const button = document.querySelector('.dark-mode-button');
button.addEventListener('click',dmOnClick);
