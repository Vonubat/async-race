import { DeleteWinnerFn } from '../types/types';
import { winners } from './path';

const deleteWinner: DeleteWinnerFn = async (id: number): Promise<void> =>
  (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export default deleteWinner;
