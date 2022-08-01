import { CarsResponse } from '../types/types';

const createPageName: (value: CarsResponse) => HTMLSpanElement = (value: CarsResponse): HTMLSpanElement => {
  const pageName: HTMLSpanElement = document.createElement('span');
  pageName.classList.add('page-name', 'text');
  pageName.id = 'page-name-garage';
  pageName.innerText = `Garage [${value.count}]`;
  return pageName;
};

export default createPageName;
