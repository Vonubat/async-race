import 'normalize.css';
import './scss/styles.scss';
import getRandomColor from './utilities/get-random-color';
import getRandomCarName from './utilities/get-random-car-name';
import carMake from './components/car-makes';
import carModel from './components/car-models';

getRandomColor();
getRandomCarName(carMake, carModel);
