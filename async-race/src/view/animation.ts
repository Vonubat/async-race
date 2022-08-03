/* eslint-disable max-lines-per-function */
import { EngineResponse } from '../types/types';

const animateCar: (id: number, value: EngineResponse) => void = (id: number, value: EngineResponse): void => {
  const car: HTMLElement = document.getElementById(`car-${id}`) as HTMLElement;
  const finish: HTMLImageElement = document.getElementById(`finish-${id}`) as HTMLImageElement;
  const startPoint: number = car.getBoundingClientRect().x + car.getBoundingClientRect().width / 2;
  const endPoint: number = finish.getBoundingClientRect().x + finish.getBoundingClientRect().width / 2 + 30;
  const distance: number = endPoint - startPoint;
  const animationTime: number = value.distance / value.velocity;
  let startTimeStamp: number;
  let previousTimeStamp: number;
  let done = false;

  function step(timestamp: number): void {
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
        window.requestAnimationFrame(step);
      }
    }
  }
  window.requestAnimationFrame(step);
};

export default animateCar;

// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
