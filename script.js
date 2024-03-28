// auto slide
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('#hero img');
    let currentImg = 0;
  
    setInterval(() => {
      images[currentImg].classList.remove('active');
      currentImg = (currentImg + 1) % images.length;
      images[currentImg].classList.add('active');
    }, 3000);
});

// animation
var about=document.querySelector('#about');
var prg=document.querySelector('#about .about-description');
var cards=document.querySelectorAll('.cards .card');

window.onscroll=(()=>{
  if(window.scrollY>=about.offsetTop - 450){
    prg.classList.add('visible');
  }
  
  
  cards.forEach((card)=>{
    
    if(window.scrollY>=card.offsetTop - 500){
    card.classList.add('visible');
    }
  })
  
})


// navbar
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
 
// language selector
 
let languageToggler=document.querySelector('select');
const changeLanguage=()=>{
  let selectedLanguage=languageToggler.value;
  if(selectedLanguage==='FR'){
    window.location.href='index.html';
  }else{
    window.location.href='index_ar.html';
  }
}

languageToggler.addEventListener('change', changeLanguage);