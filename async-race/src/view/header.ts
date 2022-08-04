import createLink from '../utilities/create-link';
import { createIconSVG } from '../utilities/create-SVG';
import generateTitle from './title';

const createHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = document.createElement('header');
  header.classList.add('header');
  return header;
};

const createNav: () => HTMLElement = (): HTMLElement => {
  const nav: HTMLElement = document.createElement('nav');
  nav.classList.add('nav');
  return nav;
};

const createBtnGarage: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnGarage: HTMLButtonElement = document.createElement('button');
  btnGarage.classList.add('button');
  btnGarage.id = 'to-garage';
  btnGarage.innerText = 'TO GARAGE';
  return btnGarage;
};

const createBtnWinners: () => HTMLButtonElement = (): HTMLButtonElement => {
  const btnWinners: HTMLButtonElement = document.createElement('button');
  btnWinners.classList.add('button');
  btnWinners.id = 'to-winners';
  btnWinners.innerText = 'TO WINNERS';
  return btnWinners;
};

const createLogoContainer: () => HTMLDivElement = (): HTMLDivElement => {
  const logoContainer: HTMLDivElement = document.createElement('div');
  logoContainer.classList.add('logo-container');
  return logoContainer;
};

const generateHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = createHeader();
  const nav: HTMLElement = createNav();
  const logoContainer: HTMLDivElement = createLogoContainer();
  const linkGitHub: HTMLAnchorElement = createLink('https://github.com/Vonubat');
  const linkRsSchool: HTMLAnchorElement = createLink('https://rs.school/');
  logoContainer.append(linkGitHub, linkRsSchool);
  linkGitHub.append(createIconSVG('github', { width: `${60}px`, height: `${60}px` }, '#FFFFFF'));
  linkRsSchool.append(createIconSVG('logo-rs', { width: `${120}px`, height: `${60}px` }, '#000000'));

  nav.append(createBtnGarage(), createBtnWinners());
  header.append(nav, generateTitle(), logoContainer);
  return header;
};

export default generateHeader;
