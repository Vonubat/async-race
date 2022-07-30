import { UpdateWinnerFn, Winner } from '../types/types';
import { winners } from './path';

const updateWinner: UpdateWinnerFn = async (body: Winner): Promise<Winner> =>
  (
    await fetch(`${winners}/${body.id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default updateWinner;
