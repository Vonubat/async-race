import { Page } from '../types/types';
import calculatePageCounter from '../utilities/page-counter';

export const generatePageCounter: (page: Page) => HTMLSpanElement = (page: Page): HTMLSpanElement => {
  const pageCounter: HTMLSpanElement = document.createElement('span');
  pageCounter.classList.add('page-counter', 'text');
  pageCounter.id = `page-counter-${page.toLocaleLowerCase()}`;
  pageCounter.innerText = `Page #1`;
  return pageCounter;
};

export const updatePageCounter: (page: Page) => HTMLSpanElement = (page: Page): HTMLSpanElement => {
  const pageCounter: HTMLSpanElement | null = document.getElementById(`page-counter-${page.toLocaleLowerCase()}`);

  if (!pageCounter) {
    throw new Error("pageCounterElement doesn't exist");
  }

  pageCounter.innerText = `Page #${calculatePageCounter(page)}`;
  return pageCounter;
};
