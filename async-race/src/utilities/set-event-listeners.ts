import { createCar, generateCars } from '../pages/garage';

const setEventListeners: () => void = (): void => {
  const generateCarsBtn: HTMLElement | null = document.getElementById('genererate-cars');
  if (!generateCarsBtn) {
    throw new Error("generateCarsBtn doesn't exist");
  } else {
    generateCarsBtn.addEventListener('click', generateCars);
  }
  const createCarBtn: HTMLElement | null = document.getElementById('create-btn');
  if (!createCarBtn) {
    throw new Error("createCarBtn: doesn't exist");
  } else {
    createCarBtn.addEventListener('click', createCar);
  }
};

export default setEventListeners;
