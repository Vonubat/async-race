import { DeleteCarFn } from '../types/types';
import { GARAGE } from './variables';

const deletetCar: DeleteCarFn = async (id: number): Promise<void> =>
  (await fetch(`${GARAGE}/${id}`, { method: 'DELETE' })).json();

export default deletetCar;
