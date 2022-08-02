import { createCar, generateCars, selectCar } from '../pages/garage';

const setEventListeners: () => void = (): void => {
  const generateCarsBtn: HTMLElement | null = document.getElementById('genererate-cars');
  if (!generateCarsBtn) {
    throw new Error("generateCarsBtn doesn't exist");
  } else {
    generateCarsBtn.addEventListener('click', generateCars);
  }
  const createCarBtn: HTMLElement | null = document.getElementById('create-btn');
  if (!createCarBtn) {
    throw new Error("createCarBtn doesn't exist");
  } else {
    createCarBtn.addEventListener('click', createCar);
  }
  const selectCarBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.select');
  if (!selectCarBtns.length) {
    throw new Error("selectCarBtns doesn't exist");
  } else {
    Array.from(selectCarBtns).forEach((item: HTMLElement): void => item.addEventListener('click', selectCar));
  }
};

export default setEventListeners;
