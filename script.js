let css = document.querySelector('h3');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.getElementById('gradient');
let randomButton = document.getElementById('randomize');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function randomGradient() {
  color1.value = rgbToHex(randomColor(), randomColor(), randomColor());
  color2.value = rgbToHex(randomColor(), randomColor(), randomColor());
  css.textContent = body.style.background + ';';
  setGradient();
}

function hexComponent(color) {
  let hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + hexComponent(r) + hexComponent(g) + hexComponent(b);
}
for (let i = 0; i < 50; i++) {
  console.log(randomColor());
}

setGradient();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
randomButton.addEventListener('click', randomGradient);
