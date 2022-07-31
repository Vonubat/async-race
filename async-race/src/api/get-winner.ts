import { GetWinnerFn, Winner } from '../types/types';
import { WINNERS } from './variables';

const getWinner: GetWinnerFn = async (id: number): Promise<Winner> => (await fetch(`${WINNERS}/${id}`)).json();

export default getWinner;
