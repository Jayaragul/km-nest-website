
  



<script>
    // Function to show phone number on desktop or open keypad on mobile
    function showPhoneNumber() {
        const phoneNumber = '+91 97916 88280';
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('mobile') !== -1) {
            window.location.href = `tel:${phoneNumber}`;  // Open phone keypad on mobile
        } else {
            alert(`Phone Number: ${phoneNumber}`);  // Display number on desktop
        }
    }

    // Function to toggle display of business hours
    function toggleBusinessHours() {
        var businessHours = document.getElementById("business-hours-display");
        if (businessHours.style.display === "none" || businessHours.style.display === "") {
            businessHours.style.display = "block";  // Show the business hours
        } else {
            businessHours.style.display = "none";  // Hide the business hours
        }
    }
</script>

let lastScrollTop = 0;
const header = document.getElementById('header');

// Toggle header visibility on scroll
window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down, hide the header
        header.classList.remove('show');
        header.classList.add('hide');
    } else {
        // Scroll up, show the header
        header.classList.remove('hide');
        header.classList.add('show');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

// Add 'visible' class to sections when they come into view
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', function () {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Handle visibility toggle for footer details
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function () {
        const targetId = this.id + '-detail'; // Get the related detail id
        const allDetails = document.querySelectorAll('.detail');

        // Hide all details except the clicked one
        allDetails.forEach(detail => {
            if (detail.id === targetId) {
                // Toggle visibility of the clicked detail
                detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
            } else {
                // Hide other details
                detail.style.display = 'none';
            }
        });

        
        }
    });
});
