import { CreateWinnerFn, Winner } from '../types/types';
import { winners } from './path';

const createWinner: CreateWinnerFn = async (body: Winner): Promise<Winner> =>
  (
    await fetch(winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default createWinner;
