//============== Navbar Sticky =================//
window.addEventListener("scroll", function(){
    var header = document.querySelector(".heading");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//============== Navbar Image Width Change =================//
const scrollImage = document.getElementById('scrollImage');

// Add an event listener to detect when the user scrolls
window.addEventListener('scroll', () => {
  // Check if the user has scrolled beyond a certain point (for example, 100 pixels)
    if (window.scrollY > 0) {
    // Add a class to change the width when scrolled
    scrollImage.classList.add('scrolled');
}   else {
    // Remove the class if the user scrolls back up
    scrollImage.classList.remove('scrolled');
}
});


//============== Scroll Reveal =================//
//============== Scroll Reveal =================//
ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.rev-left', {delay: 300, origin: 'left' });
ScrollReveal().reveal('.rev-right', {delay: 400, origin: 'right' });

ScrollReveal().reveal('.rev-top', {delay: 200, origin: 'top' });
ScrollReveal().reveal('.rev-bottom', {delay: 300, origin: 'bottom' });






