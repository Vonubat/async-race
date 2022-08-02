import getCars from '../api/get-cars';
import { CarsResponse, Page } from '../types/types';
import setEventListeners from '../utilities/set-event-listeners';
import generateGarage from './garage';
import generateHeader from './header';

const generateSPA: () => Promise<HTMLElement> = async (): Promise<HTMLElement> => {
  const body: HTMLElement | null = document.getElementById('body');
  if (!body) {
    throw new Error("body doesn't exist");
  }
  const startPage = 1;
  const garagePage: Page = 'Garage';
  // const winnersPage: Page = 'Winners';
  const carResponse: CarsResponse = await getCars(startPage);
  body.append(generateHeader(), generateGarage(carResponse, garagePage));
  setEventListeners();
  return body;
};

document.addEventListener('DOMContentLoaded', generateSPA);
