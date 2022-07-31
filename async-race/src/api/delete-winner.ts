import { DeleteWinnerFn } from '../types/types';
import { WINNERS } from './variables';

const deleteWinner: DeleteWinnerFn = async (id: number): Promise<void> =>
  (await fetch(`${WINNERS}/${id}`, { method: 'DELETE' })).json();

export default deleteWinner;
