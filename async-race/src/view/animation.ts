/* eslint-disable max-lines-per-function */
import { EngineResponse } from '../types/types';

// const getElemPosition = (elem: HTMLElement) => {};
let requestID: number;

export const getRequestID = () => {
  return requestID;
};

export const animateCar: (id: number, value: EngineResponse) => void = (id: number, value: EngineResponse): void => {
  const car: HTMLElement = document.getElementById(`car-${id}`) as HTMLElement;
  const finish: HTMLImageElement = document.getElementById(`finish-${id}`) as HTMLImageElement;
  const startPoint: number = car.getBoundingClientRect().x + car.getBoundingClientRect().width / 2;
  const endPoint: number = finish.getBoundingClientRect().x + finish.getBoundingClientRect().width / 2 + 30;
  const distance: number = endPoint - startPoint;
  const animationTime: number = value.distance / value.velocity;
  let startTimeStamp: number;
  let previousTimeStamp: number;
  let done = false;
  const getStep: (timestamp: number) => void = (timestamp: number): void => {
    if (startTimeStamp === undefined) {
      startTimeStamp = timestamp;
    }
    const elapsed: number = timestamp - startTimeStamp;
    if (previousTimeStamp !== timestamp) {
      const count: number = Math.min((distance / animationTime) * elapsed, distance);
      (car as HTMLElement).style.transform = `translateX(${count}px)`;
      if (count === distance) done = true;
    }
    if (elapsed < animationTime) {
      previousTimeStamp = timestamp;
      if (!done) {
        requestID = window.requestAnimationFrame(getStep);
        // console.log(requestID);
        // if (requestID === 50) {
        //   window.cancelAnimationFrame(requestID);
        // }
      }
    }
  };
  requestID = window.requestAnimationFrame(getStep);
};

// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

export const animation = (car: HTMLElement, distanceBtwElem: number, animationTime: number): { id: number } => {
  const targetCar = car;
  let start: number | null = null;
  const state: {
    id: number;
  } = { id: 1 };

  const getStep = (timestamp: number) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (distanceBtwElem / animationTime));
    targetCar.style.transform = `translateX(${Math.min(passed, distanceBtwElem)}px) translateY(52px)`;

    if (passed < distanceBtwElem) {
      state.id = window.requestAnimationFrame(getStep);
    }
  };

  state.id = window.requestAnimationFrame(getStep);

  return state;
};
