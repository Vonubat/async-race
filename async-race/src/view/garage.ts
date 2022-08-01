import { CarsResponse, Page } from '../types/types';
import generateMenu from './menu';
import { generatePageCounter } from './page-counter';
import generatePageName from './page-name';
import generatePagination from './pagination';
import generateAllTracks from './tracks';

const createGarage: () => HTMLElement = (): HTMLElement => {
  const garage: HTMLElement = document.createElement('section');
  garage.classList.add('garage');
  garage.id = 'garage';
  return garage;
};

const generateGarage: (value: CarsResponse, page: Page) => HTMLElement = (
  value: CarsResponse,
  page: Page
): HTMLElement => {
  const garage: HTMLElement = createGarage();
  const menu: HTMLDivElement = generateMenu();
  const tracks: HTMLDivElement = generateAllTracks(value);
  const pageName: HTMLSpanElement = generatePageName(value, page);
  const pageCounter: HTMLSpanElement = generatePageCounter(page);
  const pagination: HTMLDivElement = generatePagination(page);
  garage.append(menu, tracks, pageName, pageCounter, pagination);
  return garage;
};

export default generateGarage;
