'use strict';

  //Window Scroll event
  let scrTop ;
  let introHeight = document.getElementById('intro').offsetHeight;
   
  window.addEventListener('scroll', showAside);
  window.addEventListener('scroll', slideLeft);
  window.addEventListener('scroll', slideRight);

  //side-navigation
  function showAside(){
    let aside = document.querySelector('.side-nav');
    scrTop = document.documentElement.scrollTop;
    if(introHeight - scrTop <= 0){
      aside.classList.add('show');
    }else{
      aside.classList.remove('show');
    }
  }

  //slide-about-text effect 
  function slideLeft(){
    let myIntro = document.querySelector('.myintro');
    let edu = document.querySelector('.edu');

    scrTop = document.documentElement.scrollTop;
    if(introHeight - scrTop <= 10){
      myIntro.classList.add('leftslide');
      edu.classList.add('leftslide');
    }else{
      myIntro.classList.remove('leftslide');
      edu.classList.remove('leftslide');
    }
  }

  function slideRight(){
    let mySkill = document.querySelector('.myskill');
    scrTop = document.documentElement.scrollTop;
    if(introHeight - scrTop <= 10){
      mySkill.classList.add('rightslide');
    }else{
      mySkill.classList.remove('rightslide');
    }
  }
  // mobile side navigation

  // window.addEventListener('resize',function(){
  //   if()
  // })

  let mobileNav = function(){
    if (window.innerWidth < 768){
  window.addEventListener('load', function(){
    window.removeEventListener('scroll', showAside);
  });
  }
}

mobileNav();

//toggle button event
let toggle = document.querySelector('.toggle-btn');


toggle.addEventListener('click',activeNav);

function activeNav(){
  let aside = document.querySelector('.side-nav');

  if (aside.style.display === "block") {
    aside.style.display = "none";
    toggle.classList.remove('active');
  } else{
    aside.style.display = "block";
    toggle.classList.add('active');
  } 
}  


// Description slide Effect  
  
let animation = function () {
let items, winH;

let initModule = function () {
  items = document.querySelectorAll(".port-box");
  let effect = document.querySelectorAll('.description');
  winH = window.innerHeight;
  _addEventHandlers();
}

let _addEventHandlers = function () {
  window.addEventListener("scroll", _checkPosition);
  window.addEventListener("load", _checkPosition);
  window.addEventListener("resize", initModule);
};

let _checkPosition = function () {
  for (var i = 0; i < items.length; i++) {
    let effect = document.querySelectorAll('.description');
    let posFromTop = items[i].getBoundingClientRect().top;
    if (winH > posFromTop) {
      effect[i].classList.add("active");
    } 
  }
}

return {
  init: initModule
}
}

animation().init();
  
  

// Color block
let colorBlock = document.querySelector('.color-bl');
let color = document.querySelectorAll('.color');
let colorCode = document.querySelectorAll('.color-code');

function fillColor() {
  for(var i=0;i<color.length;i++){
    color[i].style.backgroundColor=colorCode[i].textContent;
  }    
}

fillColor();

