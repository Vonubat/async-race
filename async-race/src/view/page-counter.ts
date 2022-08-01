import { Page, WinnersResponse } from '../types/types';

const createPageCounter: (value: WinnersResponse, page: Page) => HTMLSpanElement = (
  value: WinnersResponse,
  page: Page
): HTMLSpanElement => {
  const pageCounter: HTMLSpanElement = document.createElement('span');
  pageCounter.classList.add('page-counter', 'text');
  pageCounter.id = `page-counter-${page.toLocaleLowerCase()}`;
  pageCounter.innerText = `$Page #${value.count}`;
  return pageCounter;
};

export default createPageCounter;
