import { CarsResponse, GetCarsFn } from '../types/types';
import { GARAGE, limit } from './variables';

const getCars: GetCarsFn = async (page: number): Promise<CarsResponse> => {
  const response: Response = await fetch(`${GARAGE}?_page=${page}&_limit=${limit}`);
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
