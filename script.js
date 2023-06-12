var code = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var background = document.getElementById("background");
var button = document.querySelector("button");



// console.log(code);
// console.log(color1);
// console.log(color2);
// console.log(background);

function gradient() {
    background.style.background = "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";
    code.textContent = background.style.background + ";";
    // console.log(color2.value);

}

function random () {
    var color_one = "#" + Math.random().toString(16).substring(2, 8);
    var color_two = "#" + Math.random().toString(16).substring(2, 8);
    color1.value = color_one;
    color2.value = color_two;
    gradient()
    
}




color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);
button.addEventListener("click", random);