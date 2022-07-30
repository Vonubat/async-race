import { CarsResponse, GetCarsFn } from '../types/types';
import { garage } from './path';

const getCars: GetCarsFn = async (page: number, limit = 10): Promise<CarsResponse> => {
  const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const count: string | null = response.headers.get('X-Total-Count');

  if (!count) {
    throw new Error('X-Total-Count is null');
  }

  return {
    items: await response.json(),
    count,
  };
};

export default getCars;
