import { WinnerAndCar, WinnersResponse } from '../types/types';
import createSVG from '../utilities/create-SVG';

const createTable: () => HTMLTableElement = (): HTMLTableElement => {
  let table: HTMLElement | null = document.getElementById('table');
  if (!table) {
    table = document.createElement('table');
  } else {
    table.remove();
    table = document.createElement('table');
  }

  table.classList.add('table');
  table.id = 'track-container';
  return table as HTMLTableElement;
};

const createTBody: () => HTMLTableSectionElement = (): HTMLTableSectionElement => {
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  tbody.classList.add('t-body');
  return tbody;
};

const createTR: (value: string) => HTMLTableRowElement = (value: string): HTMLTableRowElement => {
  const tr: HTMLTableRowElement = document.createElement('tr');
  tr.classList.add('tr');
  tr.id = value;
  return tr;
};

const createTH: (value: string) => HTMLTableCellElement = (value: string): HTMLTableCellElement => {
  const th: HTMLTableCellElement = document.createElement('th');
  th.classList.add('th');
  th.innerText = value;
  return th;
};

const createTD: (value: string) => HTMLTableCellElement = (value: string): HTMLTableCellElement => {
  const td: HTMLTableCellElement = document.createElement('td');
  td.classList.add('td');
  td.innerText = value;
  return td;
};

const generateTableHead: () => HTMLTableRowElement = (): HTMLTableRowElement => {
  const number: HTMLTableCellElement = createTH('Number');
  const car: HTMLTableCellElement = createTH('Car');
  const name: HTMLTableCellElement = createTH('Name');
  const wins: HTMLTableCellElement = createTH('Wins');
  const bestTime: HTMLTableCellElement = createTH('Best time (seconds)');
  const tr: HTMLTableRowElement = createTR('table-head');
  tr.append(number, car, name, wins, bestTime);

  return tr;
};

const generateTableRow: (value: WinnerAndCar, position: number) => HTMLTableRowElement = (
  value: WinnerAndCar,
  position: number
): HTMLTableRowElement => {
  const number: HTMLTableCellElement = createTD(`${position}`);
  const SVG = createSVG(value.car, { width: `${50}px`, height: `${30}px` });
  const car: HTMLTableCellElement = createTD('');
  car.append(SVG);
  const name: HTMLTableCellElement = createTD(`${value.car.name}`);
  const wins: HTMLTableCellElement = createTD(`${value.wins}`);
  const bestTime: HTMLTableCellElement = createTD(`${value.time}s`);
  const tr: HTMLTableRowElement = createTR(`table-row-${value.id}`);
  tr.append(number, car, name, wins, bestTime);

  return tr;
};

const generateTable: (value: WinnersResponse) => HTMLTableElement = (value: WinnersResponse): HTMLTableElement => {
  const table: HTMLTableElement = createTable();
  const tbody: HTMLTableSectionElement = createTBody();
  const tableHead: HTMLTableRowElement = generateTableHead();
  table.append(tbody);
  tbody.appendChild(tableHead);
  value.items.forEach((item: WinnerAndCar, index: number): void => tbody.append(generateTableRow(item, index)));
  return table;
};

export default generateTable;
