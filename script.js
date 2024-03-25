document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('#hero img');
    let currentImg = 0;
  
    setInterval(() => {
      images[currentImg].classList.remove('active');
      currentImg = (currentImg + 1) % images.length;
      images[currentImg].classList.add('active');
    }, 3000);
});

var about=document.querySelector('#about');
var prg=document.querySelector('#about .about-description');
var services=document.querySelector('#services');
var cards=document.querySelectorAll('.cards .card');

window.onscroll=(()=>{
  if(window.scrollY>=about.offsetTop - 450){
    prg.classList.add('visible');
  }
  
  if(window.scrollY>=services.offsetTop - 500){
    cards.forEach((card, index)=>{
      setTimeout(()=>{
        card.classList.add('visible');
      }, index*750)
    })
  }
})


let dropDown=false;
var burgerIcon=document.querySelector('.burger-icon');
var navBar=document.querySelector('nav');

burgerIcon.onclick=()=>{
  if(!dropDown){
    navBar.classList.add('active');
    dropDown=true;
  }else{
    navBar.classList.remove('active');
    dropDown=false;
  }
}