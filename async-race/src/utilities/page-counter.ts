import { Page } from '../types/types';

let conterGarage = 1;
let conterWinners = 1;

export const calculatePageCounter: (page: Page) => number = (page: Page): number => {
  const currentCounter: number = page === 'Garage' ? (conterGarage += 1) : (conterWinners += 1);
  return currentCounter;
};

export const getPageCounter: (page: Page) => number = (page: Page): number => {
  const currentCounter: number = page === 'Garage' ? conterGarage : conterWinners;
  return currentCounter;
};
