/* eslint-disable import/no-cycle */
import {
  createCar,
  drive,
  generateCars,
  race,
  removeCar,
  reset,
  selectCar,
  sortOrder,
  switchPagination,
  updateCar,
} from '../app/app';

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

export const setPaginationListener: () => void = (): void => {
  const nextBtnGarage: HTMLElement | null = document.getElementById('btn-next-garage');
  const nextBtnWinners: HTMLElement | null = document.getElementById('btn-next-winners');
  const prevBtnGarage: HTMLElement | null = document.getElementById('btn-prev-garage');
  const prevBtnWinners: HTMLElement | null = document.getElementById('btn-prev-winners');
  if (!nextBtnGarage || !nextBtnWinners || !prevBtnGarage || !prevBtnWinners) {
    throw new Error("nextBtnGarage || nextBtnWinners || prevBtnGarage || prevBtnWinners doesn't exist");
  } else {
    nextBtnGarage.addEventListener('click', switchPagination);
    nextBtnWinners.addEventListener('click', switchPagination);
    prevBtnGarage.addEventListener('click', switchPagination);
    prevBtnWinners.addEventListener('click', switchPagination);
  }
};

export const setStartBtnListener: () => void = (): void => {
  const startBtn: NodeListOf<HTMLElement> = document.querySelectorAll('.start');
  if (!startBtn.length) {
    throw new Error("startBtn doesn't exist");
  } else {
    Array.from(startBtn).forEach((item: HTMLElement): void => item.addEventListener('click', drive));
  }
};

export const setStopBtnListener: () => void = (): void => {
  const stopBtn: NodeListOf<HTMLElement> = document.querySelectorAll('.stop');
  if (!stopBtn.length) {
    throw new Error("stopBtn doesn't exist");
  } else {
    Array.from(stopBtn).forEach((item: HTMLElement): void => item.addEventListener('click', drive));
  }
};

export const setRaceBtnListener: () => void = (): void => {
  const raceBtn: HTMLElement | null = document.getElementById('race');
  if (!raceBtn) {
    throw new Error("raceBtn doesn't exist");
  } else {
    raceBtn.addEventListener('click', race);
  }
};

export const setResetBtnListener: () => void = (): void => {
  const resetBtn: HTMLElement | null = document.getElementById('reset');
  if (!resetBtn) {
    throw new Error("resetBtn doesn't exist");
  } else {
    resetBtn.addEventListener('click', reset);
  }
};

export const setSortOrderListener: () => void = (): void => {
  const winBtn: HTMLElement | null = document.getElementById('wins');
  const bestTimeBtn: HTMLElement | null = document.getElementById('best-time');
  if (!winBtn || !bestTimeBtn) {
    throw new Error("winBtn || bestTimeBtn doesn't exist");
  } else {
    winBtn.addEventListener('click', sortOrder);
    bestTimeBtn.addEventListener('click', sortOrder);
  }
};

export const setAllEventListeners: () => void = (): void => {
  try {
    setGenerateCarsBtnListener();
    setCreateCarBtnListener();
    setUpdateCarBtnListener();
    setRaceBtnListener();
    setResetBtnListener();
    setPaginationListener();
    setSelectCarBtnsListener();
    setRemoveCarBtnsListener();
    setStartBtnListener();
    setStopBtnListener();
    setSortOrderListener();
  } catch (error) {
    console.log('json data is empty');
    console.log(error);
  }
};
