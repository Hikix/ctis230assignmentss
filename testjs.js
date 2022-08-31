
spookay = document.getElementById("heading");

spookay.addEventListener("mouseover", onMouseOver);


// heres our event listener
function onMouseOver() {
    spookay.style.fontSize = "3em";
    spookay.style.innerHTML = "BOOOOOOOOO!";
}

spookay.addEventListener("mouseout", onMouseOut);
function onMouseOut() {
    spookay.style.fontSize = "1em";
    spookay.innerHTML = "<strong> BOOOOOOOOO! </strong>";
}

ourButton = document.getElementById("mybutton");
ourButton.addEventListener("click", onClick);
//write the event handler
function onClick() {
    ourText.innerHTML = "I clicked the button";
    ourText.style.color = "red";

}

ourButton = document.getElementById("mybutton");
ourButton.addEventListener("click", onClick);
//write the event handler
function onClick(){
    spookay.innerHTML="BOOM";
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    heading = myinput.value;  
    spookay.innerHTML = heading;  
}