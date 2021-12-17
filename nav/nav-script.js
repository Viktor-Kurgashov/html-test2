"use strict";

const pageNavWrapper = document.getElementsByClassName('nav-wrapper')[0],
  modalNavOpenBtn = document.getElementsByClassName('nav-open-btn')[0];


modalNavOpenBtn.addEventListener('click', () => {
  modalNavOpenBtn.disabled = true;
  document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
  document.body.style.overflowY = 'hidden';
  pageNavWrapper.classList.add('nav-wrapper_animation-1-2');
  setTimeout(() => pageNavWrapper.classList.add('nav-wrapper_animation-2-2'));
});


pageNavWrapper.addEventListener('click', () => {
  pageNavWrapper.classList.remove('nav-wrapper_animation-2-2');
  document.body.style.paddingRight = document.body.style.overflowY = '';
  setTimeout(() => {
    pageNavWrapper.classList.remove('nav-wrapper_animation-1-2');
    modalNavOpenBtn.disabled = false;
  }, 600)
});
