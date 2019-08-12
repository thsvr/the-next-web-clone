// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
//var header-list = document.getElementById("hidden-logo");
var header = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. 
//Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    //header-list.classList.add("logo-list");
  } else {
    header.classList.remove("sticky");
  }
}