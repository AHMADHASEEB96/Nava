`use strict`;

// Elements
const textMeBtn = document.querySelectorAll(`.text-me-btn`);
const mainTextMeBtn = document.querySelector(`#main-text-me-btn`);
const mainTextMeIcon = document.querySelector(`#text-me-icon`);
const textMeSection = document.getElementById(`text-me`);
const unknownSenderMessage = document.querySelector(`.hide-sender-info`);
const unnecessarySenderInfo = document.querySelectorAll(`.hide-info`);



// LOGIC FUNCTIONS

// When clicking the text me btn

// const trimmedTextMeBtn = textMeBtn.textContent = textMeBtn.textContent.trim()
// by clicking any of the two text me buttons
textMeBtn.forEach((btn) => {
    btn.addEventListener(`click`, (_) => { })
    // Go to the text me section

   
});

// Unknown sender functions
unknownSenderMessage.addEventListener(`mouseover`, (_) => {
  unnecessarySenderInfo.forEach((unnecessaryInput) => {
    unnecessaryInput.style.borderColor = `red`;
  });
});

unknownSenderMessage.addEventListener(`mouseout`, (_) => {
  unnecessarySenderInfo.forEach((unnecessaryInput) => {
    unnecessaryInput.style.borderColor = `white`;
  });
});

// Hide sender info
unknownSenderMessage.addEventListener(`click`, (_) => {
  if (unknownSenderMessage.innerHTML === `A Message from unknown`) {
    unknownSenderMessage.innerHTML = `Show inputs`;
  } else {
    unknownSenderMessage.innerHTML = `A Message from unknown`;
  }
  /*  i had an issue with this logic cause phrase A Message from unknown in the html file was written with indentation
   which makes it not the same like in the js if condition, 
  thats why by tapping the btn the else condition activiates directly to give the same text for the element making no changes unless we tap again,
   which resulted in a different pattern form the one seeked.
     so always make sure those white spaces aren't different in both files  */
  unnecessarySenderInfo.forEach((unnecessaryInput) => {
      unnecessaryInput.classList.toggle(`hidden`);
      console.log(` unnessecceary clicked `)
  });
});
// 
