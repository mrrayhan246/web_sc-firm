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




function scrollToSection(event, targetId, offset) {
    event.preventDefault();
    
    // Get the target section element by ID
    var targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        // Calculate the target position with the offset
        var targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + offset;
        
        // Scroll to the target position with smooth behavior
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
};


//============== Scroll Reveal =================//
//============== Scroll Reveal =================//
ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.home-titel, .protect-title ', {delay: 300, origin: 'left' });
ScrollReveal().reveal('.content h4, .content p', {delay: 400, origin: 'right' });

ScrollReveal().reveal('.container-fluid .row .col-lg-4 h2', {delay: 200, origin: 'left' });
ScrollReveal().reveal('.container-fluid .row .col-lg-4 p', {delay: 300, origin: 'right' });






