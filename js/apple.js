'use strict';

const iconButton = document.querySelector('.icon-button');

function toggleIconButton() {
  iconButton.classList.toggle('close-button');

  const isCloseButton = iconButton.matches('.close-button');
  iconButton.setAttribute('aria-label', isCloseButton ? '창 닫기' : '메뉴 열기');
}

iconButton.addEventListener('click', toggleIconButton);
