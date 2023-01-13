// Creating variables to bring in from the DOM

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Adding next button event listener and preventing it from going beyond buttons
next.addEventListener('click',() => {
  currentActive++;
  
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  console.log(currentActive);
});