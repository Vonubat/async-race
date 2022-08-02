import createCarAPI from '../api/create-car';
import getCarsAPI from '../api/get-cars';
import { CarName, CarsResponse, Color } from '../types/types';
import generate100Cars from '../utilities/generate-100cars';
import generateCarBody from '../utilities/generate-car-body';
import { getPageCounter } from '../utilities/get-set-page-counter';
import generatePageCounter from '../view/page-counter';
import genearatePageName from '../view/page-name';
import generateAllTracks from '../view/tracks';

const updatePage: () => Promise<CarsResponse> = async (): Promise<CarsResponse> => {
  const carResponse: CarsResponse = await getCarsAPI(getPageCounter('Garage'));
  genearatePageName(carResponse, 'Garage');
  generatePageCounter('Garage');
  const placeForTrackContainer: HTMLElement | null = document.getElementById('page-counter-garage');
  placeForTrackContainer?.after(generateAllTracks(carResponse));

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
