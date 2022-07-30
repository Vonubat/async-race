import { GetWinnerStatusFn } from '../types/types';
import { winners } from './path';

const getWinnerStatus: GetWinnerStatusFn = async (id: number): Promise<number> =>
  (await fetch(`${winners}/${id}`)).status;

export default getWinnerStatus;
