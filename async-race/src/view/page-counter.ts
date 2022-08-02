import { Page } from '../types/types';
import { getPageCounter } from '../utilities/get-set-page-counter';

const generatePageCounter: (page: Page) => HTMLSpanElement = (page: Page): HTMLSpanElement => {
  let pageCounter: HTMLSpanElement | null = document.getElementById(`page-counter-${page.toLocaleLowerCase()}`);
  if (!pageCounter) {
    pageCounter = document.createElement('span');
    pageCounter.classList.add('page-counter', 'text');
    pageCounter.id = `page-counter-${page.toLocaleLowerCase()}`;
    pageCounter.innerText = `Page #${getPageCounter(page)}`;
  } else {
    pageCounter.innerText = `Page #${getPageCounter(page)}`;
  }

  return pageCounter;
};

export default generatePageCounter;
