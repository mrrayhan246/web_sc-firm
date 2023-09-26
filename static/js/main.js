//============== Navbar Sticky =================//
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});





//============== Scroll Reveal =================//
//============== Scroll Reveal =================//
ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.srt-1st', {delay: 200, origin: 'right'});

ScrollReveal().reveal('.sr-1st', {delay: 300, origin: 'top'});
ScrollReveal().reveal('.sr-2nd', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.sr-3rd', {delay: 300, origin: 'right'});
ScrollReveal().reveal('.sr-4th', {delay: 300, origin: 'left'});




