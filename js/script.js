const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>200);
});

let menu = document.querySelector('#menu-icon');
let ul = document.querySelector('.ul');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    ul.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    ul.classList.remove('open');
};
ScrollReveal().reveal(".name",{distance: '40px',duration:2050,delay: 200,reset:true,origin:'top'});
ScrollReveal().reveal(".img, .about-text, .servicebox , .contact1, .contact2 ",{distance: '40px',duration:2050,delay: 200,reset:true,origin:'bottom'});
ScrollReveal().reveal(".about-text h2, .service-text, .contact2 h2",{distance: '40px',duration:2050,delay: 200,reset:true,origin:'top'});

