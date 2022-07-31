import getCars from '../api/get-cars';
import { Car, CarName, Color, CarsResponse } from '../types/types';

const test = document.getElementById('test') as HTMLElement;

const createTrackContainer: () => HTMLDivElement = (): HTMLDivElement => {
  let trackContainer: HTMLElement | null = document.getElementById('track-container');
  if (!trackContainer) {
    trackContainer = document.createElement('div');
  } else {
    trackContainer.remove();
    trackContainer = document.createElement('div');
  }

  trackContainer.classList.add('track-container');
  trackContainer.id = 'track-container';
  return trackContainer as HTMLDivElement;
};

const createCarName: (value: CarName) => HTMLSpanElement = (value: CarName): HTMLSpanElement => {
  const carName: HTMLSpanElement = document.createElement('span');
  carName.classList.add('car-name');
  carName.innerText = `${value}`;
  return carName;
};

const createFinish: () => HTMLImageElement = (): HTMLImageElement => {
  const finish: HTMLImageElement = document.createElement('img');
  finish.classList.add('finish');
  finish.src = './assets/finish.png';
  finish.alt = 'checkered flag';
  return finish;
};

const createTrackLayout: () => HTMLDivElement = (): HTMLDivElement => {
  const trackLayout: HTMLDivElement = document.createElement('div');
  trackLayout.classList.add('track-layout');
  return trackLayout;
};

const createBtnStop: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnStop: HTMLButtonElement = document.createElement('button');
  btnStop.classList.add('stop');
  btnStop.innerText = 'STOP';
  return btnStop;
};

const createBtnStart: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnStart: HTMLButtonElement = document.createElement('button');
  btnStart.classList.add('start');
  btnStart.innerText = 'START';
  return btnStart;
};

const createEngineControl: () => HTMLDivElement = (): HTMLDivElement => {
  const engineControl: HTMLDivElement = document.createElement('div');
  engineControl.classList.add('engine-control');
  return engineControl;
};

const createBtnRemove: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnRemove: HTMLButtonElement = document.createElement('button');
  btnRemove.classList.add('button');
  btnRemove.innerText = 'Remove';
  return btnRemove;
};

const createBtnSelect: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnSelect: HTMLButtonElement = document.createElement('button');
  btnSelect.classList.add('button');
  btnSelect.innerText = 'SELECT';
  return btnSelect;
};

const createCarManipulation: () => HTMLDivElement = (): HTMLDivElement => {
  const carManipulation: HTMLDivElement = document.createElement('div');
  carManipulation.classList.add('car-manipulation');
  return carManipulation;
};

const createControlsContainer: () => HTMLDivElement = (): HTMLDivElement => {
  const controlsContainer: HTMLDivElement = document.createElement('div');
  controlsContainer.classList.add('controls-container');
  return controlsContainer;
};

const createTrack: () => HTMLDivElement = (): HTMLDivElement => {
  const track: HTMLDivElement = document.createElement('div');
  track.classList.add('track');
  return track;
};

const createSVG: (color: Color) => SVGSVGElement = (color: Color): SVGSVGElement => {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const XLINK_NS = 'http://www.w3.org/1999/xlink';

  const svg: SVGSVGElement = document.createElementNS(SVG_NS, 'svg');
  svg.id = 'car';
  svg.style.fill = `${color}`;
  svg.style.width = `${70}px`;
  svg.style.height = `${30}px`;

  const use: SVGUseElement = document.createElementNS(SVG_NS, 'use');
  use.setAttributeNS(XLINK_NS, 'href', './assets/sprite.svg#car-01');

  svg.append(use);

  return svg;
};

const generateTrack: (car: Car) => HTMLDivElement = (car: Car): HTMLDivElement => {
  const track: HTMLDivElement = createTrack();
  const controlsContainer: HTMLDivElement = createControlsContainer();
  const carManipulation: HTMLDivElement = createCarManipulation();
  carManipulation.append(createBtnSelect(), createBtnRemove());
  const engineControl: HTMLDivElement = createEngineControl();
  engineControl.append(createBtnStart(), createBtnStop());
  const carName: HTMLSpanElement = createCarName(car.name);
  controlsContainer.append(carManipulation, engineControl, carName);
  const trackLayout: HTMLDivElement = createTrackLayout();
  const svg: SVGSVGElement = createSVG(car.color);
  const finish: HTMLImageElement = createFinish();
  trackLayout.append(svg, finish);
  track.append(controlsContainer, trackLayout);

  return track;
};

const generateAllTracks: () => Promise<HTMLDivElement> = async (): Promise<HTMLDivElement> => {
  const allTrackGeneration: HTMLDivElement = createTrackContainer();
  const cars: CarsResponse = await getCars(1, 5);
  cars.items.forEach((item) => {
    allTrackGeneration.append(generateTrack(item));
  });
  test?.after(allTrackGeneration);
  return allTrackGeneration;
};

export default generateAllTracks;
