upArrow = document.getElementsByClassName("scroll")[0];



upArrow.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}