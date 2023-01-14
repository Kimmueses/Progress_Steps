// Creating variables to bring in from the DOM

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Adding next button event listener to prevent it from going beyond buttons
next.addEventListener('click',() => {
  currentActive++
  
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update()

});

// Adding prev button event listener to prevent it from going beyond buttons
prev.addEventListener('click',() => {
  currentActive--
  
  if (currentActive < 1) {
    currentActive = 1;
  }
  
  update()
  
});

// Creating update function to update the DOM
function update() {
  circles.forEach((circle, idx) => {
    if(idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

// Bringing in blue line style to match with event listeners
  const actives = document.querySelectorAll('.active');

  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

// Making sure progress bar is disabled before first step and after last step
  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

