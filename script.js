var body = document.getElementsByTagName('body');
var heading = document.getElementById('heading');
var color = document.getElementById("color");
var shape = document.getElementById("shape");
var colorbtn = document.getElementById("colorbtn");
var shapebtn = document.getElementById("shapebtn");
var bothbtn = document.getElementById("bothbtn");

// Random color script
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // return `rgb(${r}, ${g}, ${b})`;
}

// function randomColor() {
//     //Math.random creates any 8 digit number from 0 to specified number(16777215)   //Math.floor removes decimal and make it nearest small integer
//     //here is hex color code generated and toString convert it to string so that it can be assigned as color code we can't assign number as color code
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     color.style.backgroundColor = "#" + randomColor;    //adding # to make it proper hex code
//     console.log("#",randomColor);   //it will give colorcode in console
// }

randomColor(); //whenever we refresh it will give random color
colorbtn.addEventListener("click", randomColor); //event to apply random color after mouse click

// Random Shape script
function randomShape() {
  var allShape = [
    "rectangle",
    "circle",
    "triangleUp",
    "parallelogram",
    "triangleLeft",
  ]; //randomShape is a array of different class name whose css created for different shapes
  //create random index from 0 to 2
  var num = Math.floor(Math.random() * 5); //removes decimal like -->// Math.floor 2.9 will be 2 // Math.ceil  2.9 will be 3
  shape.className = allShape[num]; //it assigns different class from randomShape array
}
randomShape();
shapebtn.addEventListener("click", randomShape);

//Both changes color+shape
bothbtn.addEventListener("click", randomColor);
bothbtn.addEventListener("click", randomShape);

//toggle key on event
var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body[0].style.backgroundColor = 'black';
    heading.style.color = 'white';
    // console.log("Checkbox is checked..");
  } else {
    body[0].style.backgroundColor = 'white';
    heading.style.color = 'black';
    // console.log("Checkbox is not checked..");
  }
});