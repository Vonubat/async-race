import { DeleteWinnersFn } from '../types/types';
import { winners } from './path';

const deleteWinner: DeleteWinnersFn = async (id: number): Promise<void> =>
  (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export default deleteWinner;
