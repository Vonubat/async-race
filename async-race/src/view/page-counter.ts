import { Page } from '../types/types';

const createPageCounter: (counter: number, page: Page) => HTMLSpanElement = (
  counter: number,
  page: Page
): HTMLSpanElement => {
  const pageCounter: HTMLSpanElement = document.createElement('span');
  pageCounter.classList.add('page-counter', 'text');
  pageCounter.id = `page-counter-${page.toLocaleLowerCase()}`;
  pageCounter.innerText = `$Page #${counter}`;
  return pageCounter;
};

export default createPageCounter;
