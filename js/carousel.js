const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

let current = Math.floor(Math.random() * slides.length);
console.log(current);
let next = current < slides.length - 1 ? current + 1: 0;
let prev = current > 0 ? current -1 : slides.length -1;
console.log('current', current);
console.log('next', next);
console.log('prev', prev);

const dummySlides = [
  // slide 0
  // slide 1
  // slide 2
  // slide 3
];

