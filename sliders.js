"use strict";

let about = {
  list: document.getElementsByClassName('about-slider__list')[0],
  movingRight: false,
  movingLeft: false,
  step: 50,
  swipeStart: undefined,
  setMaxOffset () {
    this.maxOffset = this.list.parentElement.clientWidth - this.list.scrollWidth - 1;
  }
}
about.setMaxOffset();



let interior = {
  list: document.getElementsByClassName('photos__list')[0],
  movingRight: false,
  movingLeft: false,
  step: 50,
  swipeStart: undefined,
  setMaxOffset() {
    this.maxOffset = this.list.parentElement.clientWidth - this.list.scrollWidth;
  }
}
interior.setMaxOffset();



let reviews = {
  list: document.getElementsByClassName('reviews-slider__list')[0],
  movingRight: false,
  movingLeft: false,
  step: 50,
  swipeStart: undefined,
  setMaxOffset() {
    this.maxOffset = this.list.parentElement.clientWidth - this.list.scrollWidth;
  }
}
reviews.setMaxOffset();



window.addEventListener('resize', () => {
  about.list.style.marginLeft = interior.list.style.marginLeft = reviews.list.style.marginLeft = '0px';
  about.setMaxOffset();
  interior.setMaxOffset();
  reviews.setMaxOffset();
});





function moveRight (obj) {
  if (obj.movingRight) {
    const offsetValue = parseInt(obj.list.style.marginLeft);

    if (offsetValue - obj.step > obj.maxOffset) {
      obj.list.style.marginLeft = offsetValue - obj.step + 'px';
      setTimeout(() => moveRight(obj), 500)
    }
    else {
      obj.list.style.marginLeft = obj.maxOffset + 'px';
      obj.movingRight = false;
    }
  }
}

document.getElementsByClassName('about-slider__btn')[1].addEventListener(
  'mouseover', () => {
    about.movingRight = true;
    moveRight(about);
});

document.getElementsByClassName('about-slider__btn')[1].addEventListener('mouseout', () => about.movingRight = false);



document.getElementsByClassName('photos__btn')[1].addEventListener(
  'mouseover', () => {
    interior.movingRight = true;
    moveRight(interior);
  });

document.getElementsByClassName('photos__btn')[1].addEventListener('mouseout', () => interior.movingRight = false);



document.getElementsByClassName('reviews-slider__btn')[1].addEventListener(
  'mouseover', () => {
    reviews.movingRight = true;
    moveRight(reviews);
  });

document.getElementsByClassName('reviews-slider__btn')[1].addEventListener('mouseout', () => reviews.movingRight = false);





function moveLeft(obj) {
  if (obj.movingLeft) {
    const offsetValue = parseInt(obj.list.style.marginLeft);

    if (offsetValue + obj.step < 0) {
      obj.list.style.marginLeft = offsetValue + obj.step + 'px';
      setTimeout(() => moveLeft(obj), 500)
    }  
    else {
      obj.list.style.marginLeft = '0px';
      obj.movingLeft = false;
    }
  }
}

document.getElementsByClassName('about-slider__btn')[0].addEventListener(
  'mouseover', () => {
    about.movingLeft = true;
    moveLeft(about);
});

document.getElementsByClassName('about-slider__btn')[0].addEventListener('mouseout', () => about.movingLeft = false);



document.getElementsByClassName('photos__btn')[0].addEventListener(
  'mouseover', () => {
    interior.movingLeft = true;
    moveLeft(interior);
  });

document.getElementsByClassName('photos__btn')[0].addEventListener('mouseout', () => interior.movingLeft = false);



document.getElementsByClassName('reviews-slider__btn')[0].addEventListener(
  'mouseover', () => {
    reviews.movingLeft = true;
    moveLeft(reviews);
  });

document.getElementsByClassName('reviews-slider__btn')[0].addEventListener('mouseout', () => reviews.movingLeft = false);





function swipe (event, obj) {
  const offsetValue = parseInt(obj.list.style.marginLeft),
    swipeLength = obj.swipeStart - event.changedTouches[0].clientX,
    pull = offsetValue - swipeLength;

  if (swipeLength > 0) {
    obj.list.style.marginLeft = (pull > obj.maxOffset) ? pull + 'px' : obj.maxOffset + 'px';
  } else {
    obj.list.style.marginLeft = (pull < 0) ? pull + 'px' : '0px';
  }
  obj.swipeStart = 0;
}



about.list.parentElement.addEventListener('touchstart', event => about.swipeStart = event.changedTouches[0].clientX);

about.list.parentElement.addEventListener('touchend', () => swipe(event, about));



interior.list.parentElement.addEventListener('touchstart', event => interior.swipeStart = event.changedTouches[0].clientX);

interior.list.parentElement.addEventListener('touchend', () => swipe(event, interior));



reviews.list.parentElement.addEventListener('touchstart', event => reviews.swipeStart = event.changedTouches[0].clientX);

reviews.list.parentElement.addEventListener('touchend', () => swipe(event, reviews));