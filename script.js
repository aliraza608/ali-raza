// Welcome Message
// ==========================
// Smooth Scrolling
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// ==========================
// Header Shadow on Scroll
// ==========================

window.addEventListener('scroll',()=>{

    const header=document.querySelector('header');

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="none";

    }

});

// ==========================
// Fade Animation
// ==========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});

  // ==========================
// Hero Image Animation
// ==========================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:2500,

iterations:1

});

},2500);

}

// ==========================
// Active Navigation Link
// ==========================

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Welcome Message
// ==========================

window.addEventListener("load",()=>{

console.log("Welcome to Ali Raza Portfolio Website");

});

// ==========================
// Gallery Hover Effect
// ==========================

const images=document.querySelectorAll(".gallery img");

images.forEach(image=>{

image.addEventListener("mouseover",()=>{

image.style.transform="scale(1.08)";

});

image.addEventListener("mouseout",()=>{

image.style.transform="scale(1)";

});

});

// ==========================
// Footer Year
// ==========================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Ali Raza | All Rights Reserved";

}

  // AOS Animation
AOS.init({
    duration:1000,
    once:true
});

// Typing Animation
new Typed("#typing",{
    strings:[
        "Artificial Intelligence Student",
        "Website Developer",
        "Meta Ads Expert",
        "Freelancer"
    ],
    typeSpeed:70,
    backSpeed:40,
    backDelay:1500,
    loop:true
});

   // Dark Mode

const darkBtn=document.getElementById("darkModeBtn");

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀️";

}else{

darkBtn.innerHTML="🌙";

}

};

  // Mobile Menu

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

  window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1200);

});

  const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};