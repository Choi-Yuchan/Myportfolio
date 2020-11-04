'use strict';

  //side-navigation
  //Window Scroll event
  let scrTop ;
  let introHeight = document.getElementById('intro').offsetHeight;
   
  window.addEventListener('scroll', showAside);
  

  function showAside(){
    let aside = document.querySelector('.side-nav');
    scrTop = document.documentElement.scrollTop;
    if(introHeight - scrTop <=0){
      aside.classList.add('show');
    }else{
      aside.classList.remove('show');
    }
  }

  // mobile side navigation

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


//mywork title effect

window.addEventListener('scroll',unsticky);

function unsticky(){
  scrTop = document.documentElement.scrollTop;
  let stickyTitle = document.querySelector('.sticky-title')
  if (scrTop > 6000){
    stickyTitle.classList.add('hide');
  } else {
    stickyTitle.classList.remove('hide');
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

