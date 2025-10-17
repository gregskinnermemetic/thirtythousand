// Toggle mobile menu
document.getElementById("mobile-menu").addEventListener("click", function() {
    var navList = document.querySelector(".nav-list");
    navList.classList.toggle("active");
});

// Function to check scroll position and update menu background
function checkScroll() {
    // Get the current scroll position
    var scrollPos = window.scrollY;

    // Get the menu element
    var menu = document.querySelector('.sticky-menu');

    // Get the positions and height of the sections
    var section0Pos = document.getElementById('section0').offsetTop;
    var section0Height = document.getElementById('section0').offsetHeight;
    var section1Pos = document.getElementById('section1').offsetTop;

    // Calculate the percentage of how much "section0" has been scrolled
    var scrollPercentage = (scrollPos - section0Pos) / section0Height;

    // Check scroll position against section positions
    if (scrollPos >= section0Pos && scrollPos < section1Pos) {
        // Adjust the opacity of the black background based on the scroll percentage
        var bgColor = `rgba(8, 38, 41, ${scrollPercentage})`;
        menu.style.backgroundColor = bgColor;
    } else if (scrollPos >= section1Pos) {
        menu.style.backgroundColor = '#082629';  // Fully black for other sections
    }

}

// Add scroll event listener
window.addEventListener('scroll', checkScroll);