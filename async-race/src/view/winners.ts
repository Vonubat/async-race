import { Page, WinnersResponse } from '../types/types';
import generatePageCounter from './page-counter';
import generatePageName from './page-name';
import generatePagination from './pagination';
import generateTable from './table';

const createWinners: () => HTMLElement = (): HTMLElement => {
  const winners: HTMLElement = document.createElement('section');
  winners.classList.add('winners');
  winners.id = 'winners';
  return winners;
};

const generateWinners: (value: WinnersResponse, page: Page) => HTMLElement = (
  value: WinnersResponse,
  page: Page
): HTMLElement => {
  const winners: HTMLElement = createWinners();
  const pageName: HTMLSpanElement = generatePageName(value, page);
  const pageCounter: HTMLSpanElement = generatePageCounter(page);
  const table: HTMLTableElement = generateTable(value);
  const pagination: HTMLDivElement = generatePagination(page);
  winners.append(pageName, pageCounter, table, pagination);
  return winners;
};

export default generateWinners;
