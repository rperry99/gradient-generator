# gradient-generator

- Project from Andrei Neagoie's Udemy course
  - His project just used vanilla JavaScript, I am trying to integrate JSColor.js to make for a more dynamic version.

## What I am trying to do

- Use jscolor for a gradient
  - I can get it to work with one color, just need to do both.

### Code for later (will be deleted)

let css = document.querySelector('h3');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.getElementById('gradient');

function setGradient() {
body.style.background =
'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
}

function update(color1, jscolor) {
// 'jscolor' instance can be used as a string
body.style.background = `#${color1.val}`;

// `linear-gradient(to right, #${jscolor}), #${jscolor})`;
}

// color1.addEventListener('input', setGradient);
// color2.addEventListener('input', setGradient);

Another test
