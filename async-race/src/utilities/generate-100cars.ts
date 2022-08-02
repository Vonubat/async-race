import createCar from '../api/create-car';
import { GenerateCarBodyFn, Body, Car } from '../types/types';
import getRandomCarName from './get-random-car-name';
import getRandomColor from './get-random-color';

const generate100Cars: () => Promise<Car[]> = async (): Promise<Car[]> => {
  const generateCarBody: GenerateCarBodyFn = (): Body => {
    return {
      name: getRandomCarName(),
      color: getRandomColor(),
    };
  };

  const CarsStorage = [];
  for (let i = 0; i < 100; i += 1) {
    CarsStorage.push(createCar(generateCarBody()));
  }
  return Promise.all(CarsStorage);
};

export default generate100Cars;
