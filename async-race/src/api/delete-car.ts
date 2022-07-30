import { DeleteCarFn } from '../types/types';
import { garage } from './path';

const deletetCar: DeleteCarFn = async (id: number): Promise<void> =>
  (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export default deletetCar;
