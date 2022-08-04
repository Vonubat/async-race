/* eslint-disable import/no-cycle */
import controlEngineAPI from '../api/control-engine';
import createCarAPI from '../api/create-car';
import deletetCarAPI from '../api/delete-car';
import deleteWinnerAPI from '../api/delete-winner';
import driveAPI from '../api/drive';
import getCarAPI from '../api/get-car';
import saveWinnerAPI from '../api/save-winner';
import updateCarAPI from '../api/update-car';
import { Actions, Car, CarName, Color, DrivingResult, EngineResponse, Page, Status } from '../types/types';
import generate100Cars from '../utilities/generate-100cars';
import generateCarBody from '../utilities/generate-car-body';
import { getButtonProp, getElementId } from '../utilities/get-elements';
import { setPageCounter } from '../utilities/get-set-page-counter';
import { getOrder, setOrder, setSort } from '../utilities/get-set-sort-order';
import updatePage from '../utilities/update-page';
import { animateCar, requestIDStorage, stoppedAnimationStorage } from '../view/animation';

const deleteWinner: (id: number) => Promise<void> = async (id: number): Promise<void> => {
  await deleteWinnerAPI(id);
};

export const generateCars: () => Promise<void> = async (): Promise<void> => {
  await generate100Cars();
  await updatePage('Garage');
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
  await updatePage('Garage');
};

export const selectCar: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const { carId } = getButtonProp(event);
  const car: Car = await getCarAPI(carId);
  const textInput: HTMLInputElement | null = document.getElementById('update-text') as HTMLInputElement | null;
  const colorInput: HTMLInputElement | null = document.getElementById('update-color') as HTMLInputElement | null;
  const updateBtn: HTMLButtonElement | null = document.getElementById('update-btn') as HTMLButtonElement | null;
  if (!textInput || !colorInput || !updateBtn) {
    throw new Error("textInput || colorInput doesn't exist");
  }
  updateBtn.classList.remove('disabled');
  textInput.value = car.name;
  colorInput.value = car.color;
  updateBtn.value = `${carId}`;
  window.scrollTo(0, 0);
};

export const updateCar: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const { carId } = getButtonProp(event);
  const textInput: HTMLInputElement | null = document.getElementById('update-text') as HTMLInputElement | null;
  const colorInput: HTMLInputElement | null = document.getElementById('update-color') as HTMLInputElement | null;
  const updateBtn: HTMLButtonElement | null = document.getElementById('update-btn') as HTMLButtonElement | null;
  if (!textInput || !colorInput || !updateBtn) {
    throw new Error("textInput || colorInput doesn't exist");
  }
  const name: CarName = textInput.value as CarName;
  const color: Color = colorInput.value as Color;
  await updateCarAPI(carId, generateCarBody(name, color));
  textInput.value = '';
  colorInput.value = '#FFFFFF';
  updateBtn.value = '';
  updateBtn.classList.add('disabled');
  await updatePage('Garage');
};

export const removeCar: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const { carId } = getButtonProp(event);
  await deletetCarAPI(carId);
  await deleteWinner(carId);
  await updatePage('Garage');
  await updatePage('Winners');
};

export const switchPagination: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const { target } = getButtonProp(event);
  let page: Page;
  let action: Actions;
  if (target.id.includes('garage')) {
    page = 'Garage';
  } else {
    page = 'Winners';
  }

  if (target.id.includes('next')) {
    action = '+';
  } else {
    action = '-';
  }
  setPageCounter(page, action);
  await updatePage(page);
};

export const controlEngine: (
  target: HTMLButtonElement,
  carId: number
) => Promise<{ responseEngine: EngineResponse; status: Status }> = async (
  target: HTMLButtonElement,
  carId: number
): Promise<{ responseEngine: EngineResponse; status: Status }> => {
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
  const responseEngine: EngineResponse = await controlEngineAPI(carId, status);
  return { responseEngine, status };
};

// export const win: (carId: number, time: number) => Promise<void> = async (
//   carId: number,
//   time: number
// ): Promise<void> => {};

export const drive: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const { target, carId } = getButtonProp(event);
  const { responseEngine, status } = await controlEngine(target, carId);
  //
  if (status === 'started') {
    animateCar(carId, responseEngine);
    stoppedAnimationStorage.delete(carId);
    const { success } = await driveAPI(carId);
    if (!success && !stoppedAnimationStorage.has(carId)) {
      window.cancelAnimationFrame(requestIDStorage.get(carId) as number);
    }
  } else {
    animateCar(carId, responseEngine);
    stoppedAnimationStorage.set(carId, carId);
  }
};

export const race: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  await updatePage('Garage');
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  target.classList.add('disabled');
  target.nextElementSibling?.classList.toggle('disabled');
  const members: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.start');
  const promises: Promise<DrivingResult | undefined>[] = Array.from(members).map(
    async (member: HTMLButtonElement): Promise<DrivingResult | undefined> => {
      const carId = Number(member.value);
      const { responseEngine } = await controlEngine(member, carId);
      const time: number = Math.round(responseEngine.distance / responseEngine.velocity) / 1000;
      animateCar(carId, responseEngine);
      stoppedAnimationStorage.delete(carId);
      const { success } = await driveAPI(carId);
      if (!success && !stoppedAnimationStorage.has(carId)) {
        window.cancelAnimationFrame(requestIDStorage.get(carId) as number);
      }
      if (success) {
        return { success, carId, time };
      }
      return Promise.reject(new Error(`car starts: #${carId}`));
    }
  );
  Promise.any(promises)
    .then(async (value: DrivingResult | undefined) => {
      console.log(value);
      target.classList.remove('disabled');
      target.nextElementSibling?.classList.toggle('disabled');
      const { carId, time } = value as DrivingResult;
      await saveWinnerAPI({ id: carId, time });
      await updatePage('Winners');
    })
    .catch((err) => {
      console.log(`${err} => all cars broken`);
    });
};

export const reset: () => Promise<void> = async (): Promise<void> => {
  await updatePage('Garage');
};

export const sortOrder: (event: Event) => Promise<void> = async (event: Event): Promise<void> => {
  const id: string = getElementId(event);
  if (id.includes('wins')) {
    setSort('wins');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getOrder() === 'ASC' ? setOrder('DESC') : setOrder('ASC');
  } else {
    setSort('time');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getOrder() === 'ASC' ? setOrder('DESC') : setOrder('ASC');
  }
  await updatePage('Winners');
};
