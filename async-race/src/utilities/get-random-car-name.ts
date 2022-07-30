import { CarName, GetRandomCarNameFn } from '../types/types';
import carMake from '../components/car-makes';
import carModel from '../components/car-models';

const getRandomCarName: GetRandomCarNameFn = (makes: typeof carMake, models: typeof carModel): CarName => {
  const makesLength: number = makes.length - 1;
  const modelsLength: number = models.length - 1;

  const randomizer: (arrLength: number) => number = (arrLength: number): number => Math.ceil(Math.random() * arrLength);

  const make: string = makes[randomizer(makesLength)];
  const model: string = models[randomizer(modelsLength)];

  const randomCarName: CarName = `${make} ${model}`;
  // console.log(randomCarName);

  return randomCarName;
};

export default getRandomCarName;
