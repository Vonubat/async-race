import { Car, GetCarFn } from '../types/types';
import { garage } from './path';

const getCar: GetCarFn = async (id: number): Promise<Car> => (await fetch(`${garage}/${id}`)).json();

export default getCar;
