// code for background particles
particlesJS("particles", {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 175,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, 
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable : true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.5
            },
            push: {
                particles_nb: 3
            }
        }
    },
    retina_detect: true
});

// scrolls to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

// displays the scroll to top button when pageYOffset is > 200
window.addEventListener('scroll', function() {
    var scrollTopButton = document.querySelector('.scrollTop');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// checks every link class for the filename and if it is current file, add active class to it
function highlightCurrentPage() {
    var currentPageUrl = window.location.href;
    var navbarLinks = document.querySelectorAll(".link");
    for (var i = 0; i < navbarLinks.length; i++) {
        var link = navbarLinks[i];
        var linkHref = link.getAttribute("href");
        if (currentPageUrl.endsWith(linkHref)) {
            link.classList.add("active");
        }
    }
}