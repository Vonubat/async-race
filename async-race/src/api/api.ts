import {
  CarsResponse,
  Car,
  GetCarFn,
  GetCarsFn,
  CreateCarFn,
  DeleteCarFn,
  Body,
  UpdateCarFn,
  EngineResponse,
  Status,
  ControlEngineFn,
  DriveFn,
  DriveResponse,
  Sort,
  Order,
  GetSortOrderFn,
} from '../types/types';

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const getCars: GetCarsFn = async (page: number, limit = 10): Promise<CarsResponse> => {
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

export const getCar: GetCarFn = async (id: number): Promise<Car> => (await fetch(`${garage}/${id}`)).json();

export const createCar: CreateCarFn = async (body: Body): Promise<Car> =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deletetCar: DeleteCarFn = async (id: number): Promise<void> =>
  (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const updateCar: UpdateCarFn = async (id: number, body: Body): Promise<Car> =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const controlEngine: ControlEngineFn = async (id: number, status: Status): Promise<EngineResponse> =>
  (await fetch(`${engine}?id=${id}&status-${status}`)).json();

export const drive: DriveFn = async (id: number): Promise<DriveResponse> => {
  const res: Response = await fetch(`${engine}&id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

export const getSortOrder: GetSortOrderFn = (sort: Sort, order: Order): string => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

export const getWinners = async ({ page, limit = 10, sort, order }) => {
  const response: Response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items = await response.json();
  const count: string | null = response.headers.get('X-Total-Count');

  if (!count) {
    throw new Error('X-Total-Count is null');
  }

  return {
    items: await Promise.all(items.map(async (winner) => ({ ...winner, car: await getCar(winner.id) }))),
    count,
  };
};

export const getWinner = async (id) => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id) => (await fetch(`${winners}/${id}`)).status;

export const deleteWinner = async (id) => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const createWinner = async (body) =>
  (
    await fetch(winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const updateWinner = async (id, body) =>
  (
    await fetch(`${winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const saveWinner = async ({ id, time }) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, { id, wins: winner.wins + 1, time: time < winner.time ? time : winner.time });
  }
};
