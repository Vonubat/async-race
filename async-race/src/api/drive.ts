import { DriveFn, DriveResponse } from '../types/types';
import { ENGINE } from './variables';

const drive: DriveFn = async (id: number): Promise<DriveResponse> => {
  const res: Response = await fetch(`${ENGINE}&id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

export default drive;
