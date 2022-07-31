import { ControlEngineFn, EngineResponse, Status } from '../types/types';
import { ENGINE } from './variables';

const controlEngine: ControlEngineFn = async (id: number, status: Status): Promise<EngineResponse> =>
  (await fetch(`${ENGINE}?id=${id}&status-${status}`)).json();

export default controlEngine;
