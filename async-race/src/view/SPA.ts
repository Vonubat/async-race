import getCarsAPI from '../api/get-cars';
import getWinnersAPI from '../api/get-winners';
import { CarsResponse, Page, WinnersResponse } from '../types/types';
import disablePagination from '../utilities/disable-pagination';
import { setAllEventListeners } from '../utilities/set-event-listeners';
import generateGarage from './garage';
import generateHeader from './header';
import generateWinners from './winners';

const generateSPA: () => Promise<HTMLElement> = async (): Promise<HTMLElement> => {
  const body: HTMLElement | null = document.getElementById('body');
  if (!body) {
    throw new Error("body doesn't exist");
  }
  const startPage = 1;
  const garagePage: Page = 'Garage';
  const winnersPage: Page = 'Winners';
  const carResponse: CarsResponse = await getCarsAPI(startPage);
  const winnersResponse: WinnersResponse = await getWinnersAPI({ pageNumber: startPage, sort: 'id', order: 'ASC' });
  body.append(generateHeader(), generateGarage(carResponse, garagePage), generateWinners(winnersResponse, winnersPage));
  setAllEventListeners();
  disablePagination(carResponse, garagePage);
  return body;
};

document.addEventListener('DOMContentLoaded', generateSPA);
