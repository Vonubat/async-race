import { ControlEngineFn, EngineResponse, Status } from '../types/types';
import { engine } from './path';

const controlEngine: ControlEngineFn = async (id: number, status: Status): Promise<EngineResponse> =>
  (await fetch(`${engine}?id=${id}&status-${status}`)).json();

export default controlEngine;
