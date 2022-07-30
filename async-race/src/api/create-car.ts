import { Car, CreateCarFn, Body } from '../types/types';
import { garage } from './path';

const createCar: CreateCarFn = async (body: Body): Promise<Car> =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default createCar;
