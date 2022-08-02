import { CarsResponse, Page } from '../types/types';

const generatePageName: (value: CarsResponse, page: Page) => HTMLSpanElement = (
  value: CarsResponse,
  page: Page
): HTMLSpanElement => {
  let pageName: HTMLElement | null = document.getElementById(`page-name-${page.toLocaleLowerCase()}`);
  if (!pageName) {
    pageName = document.createElement('span');
    pageName.classList.add('page-name', 'text');
    pageName.id = `page-name-${page.toLocaleLowerCase()}`;
    pageName.innerText = `${page} [${value.count}]`;
  } else {
    pageName.innerText = `${page} [${value.count}]`;
  }
  return pageName;
};

export default generatePageName;
