import { Car, GetCarFn } from '../types/types';
import { GARAGE } from './variables';

const getCar: GetCarFn = async (id: number): Promise<Car> => (await fetch(`${GARAGE}/${id}`)).json();

export default getCar;
