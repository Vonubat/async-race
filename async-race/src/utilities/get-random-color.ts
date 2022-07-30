import { Color, GetRandomColorFn } from '../types/types';

const getRandomColor: GetRandomColorFn = (): Color => {
  const RGB_MAX_VALUE = 255;
  const rgbValueGenerator: () => number = (): number => Math.ceil(Math.random() * RGB_MAX_VALUE);
  const R: number = rgbValueGenerator();
  const G: number = rgbValueGenerator();
  const B: number = rgbValueGenerator();
  const randomColor: Color = `#${R.toString(16)}${G.toString(16)}${B.toString(16)}`;
  // console.log(randomColor);

  return randomColor;
};

export default getRandomColor;
