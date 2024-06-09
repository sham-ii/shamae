document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting the traditional way
        
        // Show an alert to the user
        alert('Kindly inquire to our Facebook page (Alffejen Water Services) as this website is still on process. Thank you for visiting our website!');
        
        // Reset the form fields
        form.reset();
    });
});
