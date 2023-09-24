// Top Navbar ================
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var navbarIcon = this.querySelector('i');
    if (navbarIcon.classList.contains('fa-bars')) {
        navbarIcon.classList.remove('fa-bars');
        navbarIcon.classList.add('fa-xmark');
    } else {
        navbarIcon.classList.remove('fa-xmark');
        navbarIcon.classList.add('fa-bars');
    }
});



// Home Brand Owl Carousel ================
$(document).ready(function () {
    $(".home-brand-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        nav: false,
        dots: false
    });
});

// Home Client Reviews Owl Carousel ================
$(document).ready(function () {
    $(".home-client-carousel").owlCarousel({
        loop: true,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 1
            },
            769: {
                items: 2
            },
            1025: {
                items: 3
            },
            1201: {
                items: 3
            }
        },
        nav: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        navContainer: '.owl-client-container .custom-nav1',
    });
});