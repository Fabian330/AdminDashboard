const sideBar = document.querySelector('.sidebar');
const sideLinks = document.querySelectorAll('.sidebar .side-links li a:not(.logout)');
const menu = document.querySelector('.container nav .bx.bx-menu');
const toggler = document.getElementById('theme-toggle');
const logo_name = document.querySelector('.logo-name');

menu.addEventListener('click', () => {
    sideBar.classList.toggle('close');
    logo_name.classList.toggle('hide');
});

sideLinks.forEach(item =>{
    const li = item.parentElement;
    item.addEventListener('click', () =>{
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

toggler.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
});

window.addEventListener('resize', () =>{
    if (window.innerWidth < 769) {
        sideBar.classList.add('close');
        logo_name.classList.add('hide');
    }else{
        sideBar.classList.remove('close');
        logo_name.classList.remove('hide');
    }
});

if (window.innerWidth < 769) {
    sideBar.classList.add('close');
    logo_name.classList.add('hide');
}