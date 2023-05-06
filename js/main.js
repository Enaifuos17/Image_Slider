// get slider images | Array.from() "convert to an array" [ES6 feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides
let slidesCount = sliderImages.length;

// set current slide
let currentSlide = 1;

// slide number element
let slideNumber = document.getElementById("slide-number");

// prev and next buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// handle click on prev and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// nextSlide()
function nextSlide() {
  console.log("next");
}

// prevSlide()
function prevSlide() {
  console.log("previous");
}
