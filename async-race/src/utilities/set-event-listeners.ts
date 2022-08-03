/* eslint-disable import/no-cycle */
import {
  createCar,
  generateCars,
  removeCar,
  selectCar,
  startEngine,
  switchPaginationNext,
  switchPaginationPrev,
  updateCar,
} from '../pages/garage';

export const setGenerateCarsBtnListener: () => void = (): void => {
  const generateCarsBtn: HTMLElement | null = document.getElementById('genererate-cars');
  if (!generateCarsBtn) {
    throw new Error("generateCarsBtn doesn't exist");
  } else {
    generateCarsBtn.addEventListener('click', generateCars);
  }
};

export const setCreateCarBtnListener: () => void = (): void => {
  const createCarBtn: HTMLElement | null = document.getElementById('create-btn');
  if (!createCarBtn) {
    throw new Error("createCarBtn doesn't exist");
  } else {
    createCarBtn.addEventListener('click', createCar);
  }
};

export const setSelectCarBtnsListener: () => void = (): void => {
  const selectCarBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.select');
  if (!selectCarBtns.length) {
    throw new Error("selectCarBtns doesn't exist");
  } else {
    Array.from(selectCarBtns).forEach((item: HTMLElement): void => item.addEventListener('click', selectCar));
  }
};

export const setRemoveCarBtnsListener: () => void = (): void => {
  const removeCarBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.remove');
  if (!removeCarBtns.length) {
    throw new Error("selectCarBtns doesn't exist");
  } else {
    Array.from(removeCarBtns).forEach((item: HTMLElement): void => item.addEventListener('click', removeCar));
  }
};

export const setUpdateCarBtnListener: () => void = (): void => {
  const updateCarBtn: HTMLElement | null = document.getElementById('update-btn');
  if (!updateCarBtn) {
    throw new Error("updateCarBtn doesn't exist");
  } else {
    updateCarBtn.addEventListener('click', updateCar);
  }
};

export const setNextBtnListener: () => void = (): void => {
  const setNextBtnGarage: HTMLElement | null = document.getElementById('btn-next-garage');
  if (!setNextBtnGarage) {
    throw new Error("setNextBtnGarage doesn't exist");
  } else {
    setNextBtnGarage.addEventListener('click', switchPaginationNext);
  }
};

export const setPrevBtnListener: () => void = (): void => {
  const setPrevBtnGarage: HTMLElement | null = document.getElementById('btn-prev-garage');
  if (!setPrevBtnGarage) {
    throw new Error("setPrevBtnGarage doesn't exist");
  } else {
    setPrevBtnGarage.addEventListener('click', switchPaginationPrev);
  }
};

export const setStartBtnListener: () => void = (): void => {
  const setStartBtn: NodeListOf<HTMLElement> = document.querySelectorAll('.start');
  if (!setStartBtn.length) {
    throw new Error("selectCarBtns doesn't exist");
  } else {
    Array.from(setStartBtn).forEach((item: HTMLElement): void => item.addEventListener('click', startEngine));
  }
};

export const setAllEventListeners: () => void = (): void => {
  try {
    setGenerateCarsBtnListener();
    setCreateCarBtnListener();
    setUpdateCarBtnListener();
    setNextBtnListener();
    setPrevBtnListener();
    setSelectCarBtnsListener();
    setRemoveCarBtnsListener();
    setStartBtnListener();
  } catch (error) {
    console.log('json data is empty');
  }
};
