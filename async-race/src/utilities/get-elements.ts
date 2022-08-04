import { GetButtonPropFn } from '../types/types';

export const getButtonProp: GetButtonPropFn = (
  event: Event
): {
  target: HTMLButtonElement;
  carId: number;
} => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const carId = Number(target.value);
  return { target, carId };
};

export const getElementId: (event: Event) => string = (event: Event): string => {
  return (event.target as HTMLElement).id;
};
