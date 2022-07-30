import { DriveFn, DriveResponse } from '../types/types';
import { engine } from './path';

const drive: DriveFn = async (id: number): Promise<DriveResponse> => {
  const res: Response = await fetch(`${engine}&id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

export default drive;
