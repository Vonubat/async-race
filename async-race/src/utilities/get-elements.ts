import { GetButtonPropFn } from '../types/types';

export const getButtonProp: GetButtonPropFn = (
  event: Event
): {
  target: HTMLButtonElement;
  id: number;
} => {
  const target: HTMLButtonElement = event.target as HTMLButtonElement;
  const id = Number(target.value);
  return { target, id };
};
