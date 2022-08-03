/* eslint-disable import/no-cycle */
import controlEngineAPI from '../api/control-engine';
import createCarAPI from '../api/create-car';
import deletetCarAPI from '../api/delete-car';
import driveAPI from '../api/drive';
import getCarAPI from '../api/get-car';
import getCarsAPI from '../api/get-cars';
import updateCarAPI from '../api/update-car';
import { Car, CarName, CarsResponse, Color, EngineResponse, Status } from '../types/types';
import disablePagination from '../utilities/disable-pagination';
import generate100Cars from '../utilities/generate-100cars';
import generateCarBody from '../utilities/generate-car-body';
import { getPageCounter, setPageCounter } from '../utilities/get-set-page-counter';
import {
  setRemoveCarBtnsListener,
  setSelectCarBtnsListener,
  setStartBtnListener,
  setStopBtnListener,
} from '../utilities/set-event-listeners';
import { animateCar, requestIDStorage, stoppedAnimationStorage } from '../view/animation';
import generatePageCounter from '../view/page-counter';
import genearatePageName from '../view/page-name';
import generateAllTracks from '../view/tracks';

const updatePage: () => Promise<CarsResponse> = async (): Promise<CarsResponse> => {
  const carResponse: CarsResponse = await getCarsAPI(getPageCounter('Garage'));
  try {
    genearatePageName(carResponse, 'Garage');
    generatePageCounter('Garage');
    disablePagination(carResponse, 'Garage');
    const placeForTrackContainer: HTMLElement | null = document.getElementById('page-counter-garage');
    placeForTrackContainer?.after(generateAllTracks(carResponse));
    setSelectCarBtnsListener();
    setRemoveCarBtnsListener();
    setStartBtnListener();
    setStopBtnListener();
    return carResponse;
  } catch (error) {
    console.log('json data is empty');
    return carResponse;
  }
};

export const generateCars: () => Promise<void> = async (): Promise<void> => {
  await generate100Cars();
  await updatePage();
};

export const createCar: () => Promise<void> = async (): Promise<void> => {
  const textInput: HTMLInputElement | null = document.getElementById('create-text') as HTMLInputElement | null;
  const colorInput: HTMLInputElement | null = document.getElementById('create-color') as HTMLInputElement | null;
  if (!textInput || !colorInput) {
    throw new Error("textInput || colorInput doesn't exist");
  }
  const name: CarName = textInput.value as CarName;
  const color: Color = colorInput.value as Color;
  await createCarAPI(generateCarBody(name, color));
  await updatePage();
};

export const selectCar: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
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
  window.scrollTo(0, 0);
};

export const updateCar: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
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
  await updatePage();
};

export const removeCar: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const id = Number(target.value);
  await deletetCarAPI(id);
  await updatePage();
};

export const switchPaginationNext: () => Promise<void> = async (): Promise<void> => {
  setPageCounter('Garage', '+');
  await updatePage();
};

export const switchPaginationPrev: () => Promise<void> = async (): Promise<void> => {
  setPageCounter('Garage', '-');
  await updatePage();
};

export const controlEngine: (
  event: Event,
  id: number
) => Promise<{ responseEngine: EngineResponse; status: Status }> = async (
  event: Event,
  id: number
): Promise<{ responseEngine: EngineResponse; status: Status }> => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  let status: Status;
  if (target.classList.contains('start')) {
    status = 'started';
    target.classList.toggle('disabled');
    target.nextElementSibling?.classList.toggle('disabled');
  } else {
    status = 'stopped';
    target.classList.toggle('disabled');
    target.previousElementSibling?.classList.toggle('disabled');
  }
  const responseEngine: EngineResponse = await controlEngineAPI(id, status);
  return { responseEngine, status };
};

export const drive: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const id = Number(target.value);
  console.log(event);

  const { responseEngine, status } = await controlEngine(event, id);
  if (status === 'started') {
    animateCar(id, responseEngine);
    stoppedAnimationStorage.delete(id);
    const { success } = await driveAPI(id);
    if (!success && !stoppedAnimationStorage.has(id)) {
      window.cancelAnimationFrame(requestIDStorage.get(id) as number);
    }
  } else {
    animateCar(id, responseEngine);
    stoppedAnimationStorage.set(id, id);
  }
};

export const race: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  await updatePage();
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  target.classList.add('disabled');
  const members: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.start');
  Array.from(members).forEach((item: HTMLButtonElement): void => {
    const fakeEvenet = new MouseEvent('click');
    item.dispatchEvent(fakeEvenet);
  });
};
