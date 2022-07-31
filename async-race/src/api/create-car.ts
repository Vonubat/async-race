import { Car, CreateCarFn, Body } from '../types/types';
import { GARAGE } from './variables';

const createCar: CreateCarFn = async (body: Body): Promise<Car> =>
  (
    await fetch(GARAGE, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default createCar;
