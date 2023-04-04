function removeAdWall() {
  const adWall = document.querySelector('section.modal__container');
  if (adWall) {
    adWall.remove();
  }
}

function removeBlur() {
  const blur = document.querySelector('div.modal.modal--headless');
  if (blur) {
    blur.remove();
  }
}

function changeOverflow() {
  const styleElement = document.createElement('style');
  styleElement.textContent = 'html body.noScroll { overflow: visible !important; }';
  document.head.appendChild(styleElement);
}

function waitForElementAndRemove(selector) {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const element = document.querySelector(selector);
        if (element) {
          element.remove();
          observer.disconnect();
          break;
        }
      }
    }
  });

  observer.observe(document.body, { childList: true });
}

window.addEventListener('load', () => {
  waitForElementAndRemove('section.modal__container');
  waitForElementAndRemove('div.modal.modal--headless');
  changeOverflow();
});
