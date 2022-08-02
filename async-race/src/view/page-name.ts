import { CarsResponse, Page } from '../types/types';

export const generatePageName: (value: CarsResponse, page: Page) => HTMLSpanElement = (
  value: CarsResponse,
  page: Page
): HTMLSpanElement => {
  const pageName: HTMLSpanElement = document.createElement('span');
  pageName.classList.add('page-name', 'text');
  pageName.id = `page-name-${page.toLocaleLowerCase()}`;
  pageName.innerText = `${page} [${value.count}]`;
  return pageName;
};

export const updatePageName: (value: CarsResponse, page: Page) => HTMLSpanElement = (
  value: CarsResponse,
  page: Page
): HTMLSpanElement => {
  const pageName: HTMLElement | null = document.getElementById(`page-name-${page.toLocaleLowerCase()}`);
  if (!pageName) {
    throw new Error("pageName doesn't exist");
  }
  pageName.innerText = `${page} [${value.count}]`;
  return pageName;
};
