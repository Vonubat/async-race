const createHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = document.createElement('header');
  header.classList.add('header');
  return header;
};

const createNav: () => HTMLElement = (): HTMLElement => {
  const nav: HTMLElement = document.createElement('nav');
  nav.classList.add('header');
  return nav;
};

const createBtnGarage: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnGarage: HTMLButtonElement = document.createElement('button');
  btnGarage.classList.add('button');
  btnGarage.innerText = 'TO GARAGE';
  return btnGarage;
};

const createBtnWinners: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnWinners: HTMLButtonElement = document.createElement('button');
  btnWinners.classList.add('button');
  btnWinners.innerText = 'TO WINNERS';
  return btnWinners;
};

const generateHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = createHeader();
  const nav: HTMLElement = createNav();
  nav.append(createBtnGarage(), createBtnWinners());
  header.append(nav);
  return header;
};

export default generateHeader;
