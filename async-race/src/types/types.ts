import carMake from '../components/car-makes';
import carModel from '../components/car-models';

// color type
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;

// car name type
export type CarName = `${typeof carMake[number]} ${typeof carModel[number]}`;

// response interface
export interface CarsResponse {
  items: Car[];
  count: string;
}

export interface WinnersResponse {
  items: WinnerAndCar[];
  count: string;
}
export interface DriveResponse {
  success: true | false;
}

export interface EngineResponse {
  velocity: number;
  distance: number;
}

// data interface
export interface Body {
  name: string;
  color: Color;
}

export interface Car {
  name: CarName;
  color: Color;
  id: number;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
}

export interface WinnerAndCar extends Winner {
  car: Car;
}

export interface WinnerParam {
  pageNumber: number;
  sort: Sort;
  order: Order;
}

// param types
export type Status = 'started' | 'stopped';
export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
export type Page = 'Garage' | 'Winners';

// function interface
export interface GetCarFn {
  (id: number): Promise<Car>;
}

export interface GetCarsFn {
  (page: number): Promise<CarsResponse>;
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

export interface GetWinnersFn {
  (WinnerParam: WinnerParam): Promise<WinnersResponse>;
}

export interface GetWinnerFn {
  (id: number): Promise<Winner>;
}

export interface GetWinnerStatusFn {
  (id: number): Promise<number>;
}

export interface DeleteWinnerFn {
  (id: number): Promise<void>;
}

export interface CreateWinnerFn {
  (body: Winner): Promise<Winner>;
}

export interface UpdateWinnerFn {
  (body: Winner): Promise<Winner>;
}

export interface GetRandomColorFn {
  (): Color;
}

export interface GetRandomCarNameFn {
  (): CarName;
}
