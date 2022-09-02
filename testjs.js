
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
smolRuby = document.getElementById("morejs");
largeRuby = document.getElementById("bigruby");
smolRuby.addEventListener("click", makeRubyBig);
largeRuby.addEventListener("click", hideBigRuby);

function makeRubyBig() {
        // first be sure that the largeview element has no leftover HTML
        largeRuby.innerHTML = '';
        // add an img element as a child of this largeview element
        bigRuby = document.createElement("img");
        // now is when we load the big image from the server
        bigRuby.src ="bigRuby.png";
        bigRuby.style.width= "300px";
        // make this new element a child of the div for the big image
        largeRuby.appendChild(bigRuby);
        // remove the dontshow class so that the div element is displayed
        largeRuby.classList.remove("dontshow");


}

function hideBigRuby() {
    // Just add the dontshow class back to that div, and the CSS rule for dontshow takes effect again
    largeRuby.classList.add("dontshow");
}