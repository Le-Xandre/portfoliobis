"use strict";

//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper
  }
}); //Navigation bar effects on scroll

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
}); //Responsive navigation menu toggle

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
}); //jquery for toggle dropdown menus

$(document).ready(function () {
  //toggle sub-menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
  }); //toggle more-menus

  $(".more-btn").click(function () {
    $(this).next(".more-menu").slideToggle();
  });
}); //jquery for toggle dropdown menus

$(document).ready(function () {
  //toggle sub-menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
  }); //toggle more-menus

  $(".more-btn").click(function () {
    $(this).next(".more-menu").slideToggle();
  });
}); //javascript for the responsive navigation menu

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
}); //javascript for the navigation bar effects on scroll

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
}); // The hamburger button animation

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  links.forEach(function (link) {
    link.classList.toggle('fade');
  });
});
var items = document.querySelectorAll('img');
var itemCount = items.length;
var nextItem = document.querySelector('.next');
var previousItem = document.querySelector('.previous');
var count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);