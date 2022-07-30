import { Car, UpdateCarFn, Body } from '../types/types';
import { garage } from './path';

const updateCar: UpdateCarFn = async (id: number, body: Body): Promise<Car> =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default updateCar;
