import { WinnerAndCar, GetWinnersFn, Winner, WinnerParam, WinnersResponse } from '../types/types';
import getCar from './get-car';
import getSortOrder from './get-sort-order';
import { winners } from './path';

export const getWinners: GetWinnersFn = async ({
  page,
  limit = 10,
  sort,
  order,
}: WinnerParam): Promise<WinnersResponse> => {
  const response: Response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items: Winner[] = await response.json();
  const count: string | null = response.headers.get('X-Total-Count');

  if (!count) {
    throw new Error('X-Total-Count is null');
  }

  return {
    items: await Promise.all(
      items.map(async (winner: Winner): Promise<WinnerAndCar> => ({ ...winner, car: await getCar(winner.id) }))
    ),
    count,
  };
};
