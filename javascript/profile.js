


document.querySelectorAll('.main-nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var btns = document.querySelectorAll(".btn-sl");
var slider = document.querySelector(".slide-row");
var slideWidth = document.querySelector(".slide-col").offsetWidth;

btns.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        slider.style.transform = `translateX(${-index * slideWidth}px)`;

        // Update active class
        btns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
