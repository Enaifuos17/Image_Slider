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

// create the main ul element
let ulElement = document.createElement("ul");

// set id on indicatorsElement
ulElement.setAttribute("id", "main-ul");

// create list items base on slidesCount
for (let i = 1; i <= slidesCount; i++) {
  // create li
  let liElement = document.createElement("li");

  // set custom attribute
  liElement.setAttribute("data-index", i);

  // set item content
  liElement.appendChild(document.createTextNode(i));

  // append items to the main parent (ul)
  ulElement.appendChild(liElement);
}

// add the created ulElement to the page
let indicatorsSpan = document.getElementById("indicators");
indicatorsSpan.appendChild(ulElement);

// call the new created ul (after we created it)
let ulLast = document.getElementById("main-ul");

// get li items | Array.from
let liItems = Array.from(
  document.querySelectorAll(".slider-controls .indicators ul li")
);

// loop through all li items
for (let i = 0; i < liItems.length; i++) {
  liItems[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// call checker() function
checker();

// * MAIN FUNCTIONS

// checker()
function checker() {
  // set the slide number
  // currentSlide = 1
  slideNumber.textContent = `Slide #${currentSlide} of ${slidesCount}`;

  // remove all active classes from imgs and li items
  removeAllActives();

  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  // set active class on current li item
  ulLast.children[currentSlide - 1].classList.add("active");

  // check if current slide is the first
  if (currentSlide === 1) {
    // add "disabled" class on prev button
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  // check if current slide is the last
  if (currentSlide === slidesCount) {
    // add "disabled" class on next button
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from imgs and li bullets
function removeAllActives() {
  // loop through images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // loop through li items
  liItems.forEach((li) => {
    li.classList.remove("active");
  });
}

// nextSlide()
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide++;
    checker();
  }
  console.log("next");
}

// prevSlide();
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
  console.log("prev");
}
