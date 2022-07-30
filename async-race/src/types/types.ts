type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;

export interface Car {
  name: string;
  color: Color;
  id: number;
}

export interface CarsResponse {
  items: Car[];
  count: string;
}

export interface DriveResponse {
  success: true | false;
}

export interface Body {
  name: string;
  color: Color;
}

export interface EngineResponse {
  velocity: number;
  distance: number;
}

export type Status = 'started' | 'stopped';
export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';

export interface GetCarFn {
  (id: number): Promise<Car>;
}

export interface GetCarsFn {
  (page: number, limit: number): Promise<CarsResponse>;
}

export interface CreateCarFn {
  (body: Body): Promise<Car>;
}

export interface DeleteCarFn {
  (id: number): Promise<void>;
}

export interface UpdateCarFn {
  (id: number, body: Body): Promise<Car>;
}

export interface ControlEngineFn {
  (id: number, status: Status): Promise<EngineResponse>;
}

export interface DriveFn {
  (id: number): Promise<DriveResponse>;
}

export interface GetSortOrderFn {
  (sort: Sort, order: Order): string;
}
