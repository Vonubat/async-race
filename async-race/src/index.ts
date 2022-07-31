import 'normalize.css';
import './scss/styles.scss';
import getRandomColor from './utilities/get-random-color';
import getRandomCarName from './utilities/get-random-car-name';
import generateAllTracks from './view/generate-tracks';

document.addEventListener('click', generateAllTracks);
getRandomColor();
getRandomCarName();
