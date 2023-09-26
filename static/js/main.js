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
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('.srt-1st', {delay: 200, origin: 'right'});

ScrollReveal().reveal('.sr-1st', {delay: 200, origin: 'top'});
ScrollReveal().reveal('.sr-2nd', {delay: 200, origin: 'left'});
ScrollReveal().reveal('.sr-3rd', {delay: 200, origin: 'right'});
ScrollReveal().reveal('.sr-4th', {delay: 200, origin: 'left'});




