/* eslint-disable import/no-cycle */
import createCarAPI from '../api/create-car';
import getCarAPI from '../api/get-car';
import getCarsAPI from '../api/get-cars';
import updateCarAPI from '../api/update-car';
import { Car, CarName, CarsResponse, Color } from '../types/types';
import generate100Cars from '../utilities/generate-100cars';
import generateCarBody from '../utilities/generate-car-body';
import { getPageCounter } from '../utilities/get-set-page-counter';
import { setSelectCarBtnsListener } from '../utilities/set-event-listeners';
import generatePageCounter from '../view/page-counter';
import genearatePageName from '../view/page-name';
import generateAllTracks from '../view/tracks';

const updatePage: () => Promise<CarsResponse> = async (): Promise<CarsResponse> => {
  const carResponse: CarsResponse = await getCarsAPI(getPageCounter('Garage'));
  genearatePageName(carResponse, 'Garage');
  generatePageCounter('Garage');
  const placeForTrackContainer: HTMLElement | null = document.getElementById('page-counter-garage');
  placeForTrackContainer?.after(generateAllTracks(carResponse));
  setSelectCarBtnsListener();
  return carResponse;
};

export const generateCars: () => Promise<CarsResponse> = async (): Promise<CarsResponse> => {
  await generate100Cars();
  return updatePage();
};

export const createCar: () => Promise<CarsResponse> = async (): Promise<CarsResponse> => {
  const textInput: HTMLInputElement | null = document.getElementById('create-text') as HTMLInputElement | null;
  const colorInput: HTMLInputElement | null = document.getElementById('create-color') as HTMLInputElement | null;
  if (!textInput || !colorInput) {
    throw new Error("textInput || colorInput doesn't exist");
  }
  const name: CarName = textInput.value as CarName;
  const color: Color = colorInput.value as Color;
  await createCarAPI(generateCarBody(name, color));
  return updatePage();
};

export const selectCar: (event: Event) => Promise<Car> = async (event: Event): Promise<Car> => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const id = Number(target.value);
  const car: Car = await getCarAPI(id);
  const textInput: HTMLInputElement | null = document.getElementById('update-text') as HTMLInputElement | null;
  const colorInput: HTMLInputElement | null = document.getElementById('update-color') as HTMLInputElement | null;
  const updateBtn: HTMLButtonElement | null = document.getElementById('update-btn') as HTMLButtonElement | null;
  if (!textInput || !colorInput || !updateBtn) {
    throw new Error("textInput || colorInput doesn't exist");
  }
  updateBtn.classList.remove('disabled');
  textInput.value = car.name;
  colorInput.value = car.color;
  updateBtn.value = `${id}`;
  return car;
};

export const updateCar: (event: Event) => Promise<CarsResponse> = async (event: Event): Promise<CarsResponse> => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const id = Number(target.value);
  const textInput: HTMLInputElement | null = document.getElementById('update-text') as HTMLInputElement | null;
  const colorInput: HTMLInputElement | null = document.getElementById('update-color') as HTMLInputElement | null;
  const updateBtn: HTMLButtonElement | null = document.getElementById('update-btn') as HTMLButtonElement | null;
  if (!textInput || !colorInput || !updateBtn) {
    throw new Error("textInput || colorInput doesn't exist");
  }
  const name: CarName = textInput.value as CarName;
  const color: Color = colorInput.value as Color;
  await updateCarAPI(id, generateCarBody(name, color));
  textInput.value = '';
  colorInput.value = '#FFFFFF';
  updateBtn.value = '';
  updateBtn.classList.add('disabled');
  return updatePage();
};
