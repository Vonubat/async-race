const createMenu: () => HTMLDivElement = (): HTMLDivElement => {
  const menu: HTMLDivElement = document.createElement('div');
  menu.classList.add('menu');
  return menu;
};

const createCreateCar: () => HTMLDivElement = (): HTMLDivElement => {
  const createCar: HTMLDivElement = document.createElement('div');
  createCar.classList.add('create-car');
  return createCar;
};

const createUpdateCar: () => HTMLDivElement = (): HTMLDivElement => {
  const updateCar: HTMLDivElement = document.createElement('div');
  updateCar.classList.add('update-car');
  return updateCar;
};

const createRaceControls: () => HTMLDivElement = (): HTMLDivElement => {
  const raceControls: HTMLDivElement = document.createElement('div');
  raceControls.classList.add('race-controls');
  return raceControls;
};

const createBtnRace: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnRace: HTMLButtonElement = document.createElement('button');
  btnRace.classList.add('button');
  btnRace.id = 'race';
  btnRace.innerText = 'RACE';
  return btnRace;
};

const createBtnReset: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnReset: HTMLButtonElement = document.createElement('button');
  btnReset.classList.add('button');
  btnReset.id = 'reset';
  btnReset.innerText = 'RESET';
  return btnReset;
};

const createBtnGenerateCars: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnGenerateCars: HTMLButtonElement = document.createElement('button');
  btnGenerateCars.classList.add('button');
  btnGenerateCars.id = 'genererate-cars';
  btnGenerateCars.innerText = 'GENERATE CARS';
  return btnGenerateCars;
};

const createBtnCreate: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnCreate: HTMLButtonElement = document.createElement('button');
  btnCreate.classList.add('button');
  btnCreate.id = 'create-btn';
  btnCreate.innerText = 'CREATE';
  return btnCreate;
};

const createBtnUpdate: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnUpdate: HTMLButtonElement = document.createElement('button');
  btnUpdate.classList.add('button');
  btnUpdate.id = 'update-btn';
  btnUpdate.innerText = 'UPDATE';
  return btnUpdate;
};

const createInputCreateText: () => HTMLInputElement = (): HTMLInputElement => {
  const inputCreateText: HTMLInputElement = document.createElement('input');
  inputCreateText.classList.add('create-text');
  inputCreateText.id = 'create-text';
  inputCreateText.type = 'text';
  return inputCreateText;
};

const createInputUpdateText: () => HTMLInputElement = (): HTMLInputElement => {
  const inputUpdateText: HTMLInputElement = document.createElement('input');
  inputUpdateText.classList.add('update-text');
  inputUpdateText.id = 'update-text';
  inputUpdateText.type = 'text';
  return inputUpdateText;
};

const createInputCreateColor: () => HTMLInputElement = (): HTMLInputElement => {
  const inputCreateColor: HTMLInputElement = document.createElement('input');
  inputCreateColor.classList.add('create-color');
  inputCreateColor.id = 'create-color';
  inputCreateColor.name = 'create-color';
  inputCreateColor.type = 'color';
  inputCreateColor.value = '#FFFFFF';
  return inputCreateColor;
};

const createInputUpdateColor: () => HTMLInputElement = (): HTMLInputElement => {
  const inputUpdateColor: HTMLInputElement = document.createElement('input');
  inputUpdateColor.classList.add('update-color');
  inputUpdateColor.id = 'update-color';
  inputUpdateColor.name = 'update-color';
  inputUpdateColor.type = 'color';
  inputUpdateColor.value = '#FFFFFF';
  return inputUpdateColor;
};

const generateMenu: () => HTMLDivElement = (): HTMLDivElement => {
  const menu: HTMLDivElement = createMenu();
  const createCar: HTMLDivElement = createCreateCar();
  createCar.append(createInputCreateText(), createInputCreateColor(), createBtnCreate());
  const updateCar: HTMLDivElement = createUpdateCar();
  updateCar.append(createInputUpdateText(), createInputUpdateColor(), createBtnUpdate());
  const raceControls: HTMLDivElement = createRaceControls();
  raceControls.append(createBtnRace(), createBtnReset(), createBtnGenerateCars());
  menu.append(createCar, updateCar, raceControls);
  return menu;
};

export default generateMenu;
