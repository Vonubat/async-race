import { GetWinnerFn, Winner } from '../types/types';
import { winners } from './path';

const getWinner: GetWinnerFn = async (id: number): Promise<Winner> => (await fetch(`${winners}/${id}`)).json();

export default getWinner;
