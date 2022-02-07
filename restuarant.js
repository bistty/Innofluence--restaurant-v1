
document.querySelector(".toggler").
addEventListener('click',() =>{
document.querySelector("body").classList.toggle("open");
});






window.sr = ScrollReveal();

sr.reveal(".cen", {
    origin: "top",
    duration: 1400,
    distance: "25rem",
    delay: 300}) ;

sr.reveal(".left", {
    origin: "left",
    duration:1000,
    distance: "25rem",
    delay: 300}) ;

sr.reveal(".right", {
    origin: "right",
    duration: 1000,
    distance: "25rem",
    delay: 300}) ;