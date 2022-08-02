import { generateCars } from '../pages/garage';

const setEventListeners: () => void = (): void => {
  const generateCarsBtn: HTMLElement | null = document.getElementById('genererate-cars');
  if (!generateCarsBtn) {
    throw new Error("generateCarsBtn doesn't exist");
  } else {
    generateCarsBtn.addEventListener('click', generateCars);
  }
};

export default setEventListeners;
