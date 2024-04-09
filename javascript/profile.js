


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

const next = document.querySelector(".next");
const back = document.querySelector(".back");
const carousel   = document.querySelector(".carousel-cards");
let  angle=0;
next.addEventListener("click",()=>{
    angle -=45;
    carousel.style.transform=`translateZ(-25rem)
    rotateY(${angle}deg)`;
})
back.addEventListener("click",()=>{
    angle +=45;
    carousel.style.transform=`translateZ(-25rem)
    rotateY(${angle}deg)`;
})
//    mobile 
 const btnNav= document.querySelector(".btn-mobile-nav");
 const header= document.querySelector(".header");
 btnNav.addEventListener("click",function(){
    header.classList.toggle("nav-open")
 });
//  creating stiky navigation
const stickHero=document.querySelector(".section-hero")
 const obs= new IntersectionObserver(function (entries){
    const ent=entries[0];
    console.log(ent);
    if(ent.isIntersecting===false){
        document.querySelector(".header").classList.add("sticky")
    }
    if(ent.isIntersecting===true){
        document.querySelector(".header").classList.remove("sticky")
    }

 }, 
 { 
    roo:null,
    threshold:0, 
    rootMargin: "-80px",
 });
 obs.observe(stickHero);