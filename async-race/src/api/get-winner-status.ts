import { GetWinnerStatusFn } from '../types/types';
import { WINNERS } from './variables';

const getWinnerStatus: GetWinnerStatusFn = async (id: number): Promise<number> =>
  (await fetch(`${WINNERS}/${id}`)).status;

export default getWinnerStatus;
