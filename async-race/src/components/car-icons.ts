/* eslint-disable max-lines-per-function */
import { Color } from '../types/types';

const jeep: (cb: typeof svgHead, color: Color) => string = (cb: (color: Color) => string, color: Color): string => `<svg
  ${cb(color)}
>
<path fill-rule="evenodd" d="m2.2 125.4c0.9-4.5 2.2-9.9 2.2-9.9l-0.2-11.8c0 0 7.5-3.8 7.8-5.6 0.2-1.8 1.1-23.1 3.5-26.8
      2.5-3.8-1.1-17.1-1.1-17.1h17.4c0 0 17.6-15.1 30-20.7 0 0 2-8.7-5.3-13.3l-0.2-2.7c0 0 16-2.2 37.3-3.8 0 0 7.3-7.9 18-9.1
      10.7-1.2 135.3-10 166.2 13.4 30.9 23.4 53.1 39 53.1 39 0 0 126.9-0.8 157.2 31.6 0 0 0.4 11.1 0 16.9 0 0 3.1 5.3 7.3 6.6
      4.3 1.3-1.1 8.8-1.1 8.8 0 0-8.9 4.8-9.5 11.6-0.7 6.9-18.1 15.6-26.3 21.6 0 0 5.2-58-44.5-62.4-49.7-4.5-53.2 59.1-53.2
      59.1h-180.3c0 0-23.6 7.1-29.4 3.3 0 0-2.2-62.4-47.2-62.4-45 0-52.5 38.6-49 56 0 0-12.4 0.4-17.8-4.5-5.3-4.9-16.5-0.9-16.5-0.9
      0 0-12.9 0.5-9.3-5.8 0 0-10-6.5-9.1-11.1zm10.2 0.6l34.5 1.7c0 0 13.8-42.7 55.7-42.4 41.8 0.3 50.3 47.2 50.3 47.2l205.3 2.1c0 0
      2.1-45 50.6-49.3 48.6-4.3 54.4 49.3 54.4 49.3 0 0 12.2-0.1 15.3-2.5 0 0-8.7-0.9-11.1-3.1-2.5-2.2-4.7-48.4-56.3-48.4-51.7 0-57.9
      47.2-57.9 47.2l-195.9 0.3c0 0-8.7-39.8-49.6-46.4l0.2-19.3 3.1-4.8c35.2 2.4 70.9 3.4 102.4 3.6l1.2 63.4c6-29.4 1.9-53.9-0.3-63.4q6
      0 11.7 0c20.6 0 39-0.3 53.6-0.6l-0.5-1.2c-0.9-2.5-1.1-4.7-1-6.5-0.4-7.9 6.7-9.2 6.7-9.2-18.2-14.4-47.8-19.7-59.4-20.2-11.6-0.4-6.8
      9.7-6.8 9.7l6.6 24.5-11.8-0.2c0-0.1-0.1 0.1-0.1 0h-0.1c-3.8-0.1-7.5-0.2-11.3-0.2l-0.1-0.2-3-33.6c0 0-49.3-2.6-58 13.1l2.1
      19.3c-11.3-0.2-21.8 0.2-30.6 0.1l-0.5-0.1-26.9-0.4c8.3 0.7 16.7 1.4 25.1 2l-4.8 4.2-0.4 18.6c0 0-46.3-0.4-60.1 43.2 0
      0-9.6-8.3-10.7-17.6 0 0-14.7 3.1-26.7 0 0 0-2.5 8.6 5.1 20.1zm34.8-69.2c1.6-1.1 26.8-19.2 30.9-22.9 4.2-3.7 4.6-7.3
      4.6-7.3zm270.7 0.1c0 0-43.4-35-74.2-40.5-30.7-5.6-98.1-2.7-118.2 7.3-19.3 9.7-74 30.1-39.9 31.5-19.2-10.4 67.1-35
      67.1-35 0 0 75.2-7.8 103.3 2.4 28 10.2 59 36.7 59 36.7 3.3 0.1 5.1 0.2 5.1 0.2zm-205-47.3l5.3 4c95.3-8.9 133.8-0.6
      147.8 4.7-50.5-22.4-153.1-8.7-153.1-8.7zm-48.1 10.8v3.1c0 0 28.5-4.7 44.5-5.9zm232 39.8c0 0 7.1-4.6
      2.3-9.8-4.7-5.1-10.7-4.8-10.7-4.8 0 0 13 5.7 8.4 14.6zm27.1 1.9c21.3 16.9 9.2 59.3 8.3 62.2 21-50.5-8.3-62.2-8.3-62.2zm19.5
      62.4h7.8c3.3-22.1 17.5-32.1 17.5-32.1-17.5-1.5-25.3 32.1-25.3 32.1zm138.3-28c4.4-4.4 0-8.7 0-8.7-18.9-14-60.1-14.3-60.1-14.3
      29.1 9 33.1 17.6 39.9 21.2 6.8 3.6 20.2 1.8 20.2 1.8zm-457.2-32.4c-13.7 15.2 2 16.2 19.2 10.8 17.1-5.3 15.1-10.8
      15.1-10.8zm225.2 8c0-0.9-0.8-1.7-1.7-1.7h-25.9c-0.9 0-1.6 0.8-1.6 1.7 0 0.9 0.7 1.6 1.6 1.6h25.9c0.9 0 1.7-0.7
      1.7-1.6zm-104.9-2.2c0-0.9-0.7-1.5-1.5-1.5h-25.8c-0.9 0-1.5 0.6-1.5 1.5 0 0.8 0.6 1.4 1.5 1.4h25.8c0.8 0 1.5-0.6 1.5-1.4z"/>
    <path d="m266 18.4q3.8 1.6 7 3.5c-0.1-0.1-1.9-1.6-7-3.5z"/>
    <path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5
      0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9
      0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8
      9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1
      15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>
    <path fill-rule="evenodd" d="m102.5 97.4c22.8 0 41.2 18.3 41.2 41 0 22.7-18.4 41-41.2 41-22.8 0-41.2-18.3-41.2-41 0-22.7 18.4-41 41.2-41zm-33.2
      40.2c0 17.9 14.6 32.5 32.6 32.5 18.1 0 32.7-14.6 32.7-32.5 0-18-14.6-32.5-32.7-32.5-18 0-32.6 14.5-32.6 32.5z"/>
    <path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5
      0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9
      0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8
      9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1
      15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>
    <path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3
      13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7
      4-3.9 0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8
      9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1
      15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>
    <path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3
      13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9
      0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8
      9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1
      15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>
    <path fill-rule="evenodd" d="m409.7 97.4c22.8 0 41.2 18.3 41.2 41 0 22.7-18.4 41-41.2 41-22.8 0-41.2-18.3-41.2-41 0-22.7 18.4-41
      41.2-41zm-33.2 40.2c0 17.9 14.6 32.5 32.6 32.5 18.1 0 32.7-14.6 32.7-32.5 0-18-14.6-32.5-32.7-32.5-18 0-32.6 14.5-32.6 32.5z"/>
    <path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3
      13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 0-2.2-1.8-3.9-4-3.9-2.2
      0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3
      16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>
    <path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5
      0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9
      0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8
      9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1
      15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>
</svg>`;

const sportCar: (cb: typeof svgHead, color: Color) => string = (
  cb: (color: Color) => string,
  color: Color
): string => `<svg
  ${cb(color)}
>
<path fill-rule="evenodd" d="m4.1 67l3.9-3.6c0 0 11.6 2.1 19.5 1.8 7.8-0.3 16.4-11.7 8-11.5-2 0-4.2-0.4-6.3-1q0 0 0
    0c-7.1-1.9-14-6.1-14-6.1l-4.2-9c0 0-4.4-7.5 4.6-6.9 9 0.6 18.9 4.4 18.9 4.4 0 0 87.6-21.5 104.7-24.8 17.1-3.3
    89.6-17.6 153.3 14.5 0 0 40.2 18.9 44.1 19.2 0 0 119.9 5.8 159.4 41 0 0 0.6 12.9 0 21.3 0 0 1.8 5.4-1.3 10.6 0 0 2.1
    4.2-1.4 3.6l-1.1 8.7c0 0-4.2-2.1-6.1 4.9 0 0-22.1 5.4-28.1 4.1 0 0 6.7-66.9-41.5-66.9-48.1 0-52.7 42.5-53.4 67.1l-1.8
    1.5c0 0-212.6-6.3-218.3-2.8 0 0-2.1 0-1.7-4 0 0 6.9-65.5-50.2-65.5-57.2 0-44.2 61.3-44.2 61.3 0 0-42.8-9.6-36.3-16.1 0
    0-14.9-20.3-6.5-45.8zm366.1 5.1c3.2-3.9-41.9-4.4-41.9-4.4 0 0-5 4.8-3.3 9.3 1.6 4.5 25.1 3.8 31.8 3.1 6.8-0.8 13.4-8
    13.4-8zm-81-19.7c0 0 22.5 0.2 25.6 0 3-0.3 1.9-1.5 1.9-1.5 0 0-5.6-7.7-44.6-24.3-38.9-16.5-62-14.1-62-14.1-107.7 3-87.9
    16.1-87.9 16.1l8.1 9.4 25.2 4.8 110 6.9zm-102.6 7.1c0 1.2 1 2.2 2.2 2.2h17.7c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3h-17.7c-1.2
    0-2.2 1-2.2 2.3zm134.4 18.7c0 0 0.8 34.1-3 42.3l-94.8-3c0 0-28.7 1-39.4-19.8 0 0-9.1-19-10.5-25.5 0.3 2.2 4 37.5 22.9 42.7 19.7
    5.4 124.8 8.2 124.8 8.2 0 0 4.1-35.1 0-44.9zm46 18q0.2-0.3 0.5-0.8 0.6-0.9 1.3-2 0.2-0.3 0.4-0.7 0.5-0.7 1.1-1.5 0.2-0.3
    0.4-0.6c0.9-1.1 1.8-2.3 2.8-3.5q0.4-0.5 0.8-0.9c2.2-2.5 4.7-5 7.7-7.4q0.4-0.3 0.8-0.6 0.4-0.3 0.8-0.6 1.1-0.8 2.3-1.6 0.8-0.5
    1.6-1.1 1.3-0.7 2.6-1.4 0.9-0.5 1.9-0.9 0.4-0.2 0.8-0.4 0.4-0.2 0.8-0.4 0.8-0.3 1.6-0.7 1-0.3 1.9-0.6 1.3-0.5 2.6-0.8 0.4-0.2
    0.9-0.3 1-0.2 2.1-0.5 1.1-0.2 2.2-0.4 0.7-0.1 1.4-0.2 0.1 0 0.1 0 0.6-0.1 1.2-0.1 1-0.1 2.1-0.2 0.7 0 1.5 0 1.5-0.1 3.1 0c34.1
    1 44 31.3 44 31.3h8.2c0 0 9.9-5.8 19.8-5.1 10 0.8 3.3-4.3-8.4-6.5-11.7-2.1-22.6-14.4-24.4-17.7-1.8-3.3-45.4-14-72.6-12.8 0 0 40
    2 70 14.9 0 0 1.1 4.1-11.7 0q-1.6-0.5-3.7-1.3-0.7-0.2-1.5-0.5-2.2-0.8-4.9-1.6-1.7-0.5-3.6-1-0.8-0.2-1.5-0.4-0.7-0.2-1.5-0.3-0.7-0.2-1.5-0.3-0.8-0.2-1.6-0.3-0.9-0.2-1.9-0.3-1-0.2-2-0.2-0.6-0.1-1.1-0.1-0.7-0.1-1.4-0.1-0.1 0-0.3
    0-1-0.1-2.1-0.1-1 0-2 0.1-1.1 0-2.1 0.1-0.7 0.1-1.4 0.2-0.6 0-1.1 0.1-0.7 0.1-1.5 0.2-0.2 0.1-0.4 0.1-0.7 0.1-1.3
    0.3c-0.5 0.1-0.9 0.2-1.4 0.4q-0.7 0.1-1.4 0.4-0.8 0.2-1.5 0.4-1.4 0.5-2.9 1.1-0.7 0.3-1.4 0.7-1.6 0.7-3.2 1.7-0.5
    0.3-1.1 0.7c-0.2 0.1-0.4 0.3-0.6 0.4q-0.4 0.2-0.7 0.5-0.3 0.2-0.6 0.4 0 0 0 0-0.5 0.3-1 0.6-0.5 0.4-1 0.8-0.1 0.1-0.2
    0.2-0.4 0.3-0.7 0.6-0.6 0.5-1.2 1-0.6 0.5-1.1 1-0.6 0.5-1.1 1.1-0.1 0.1-0.3 0.2-0.7 0.7-1.4 1.5-1.2 1.3-2.4 2.7-0.4
    0.6-0.9 1.2-1.7 2.2-3.4 4.7-0.7 0.9-1.3 2-1.5 2.3-2.9 5-0.2 0.3-0.3 0.6 0.1-0.1 0.2-0.4zm125.8-8.5c-11.7-13.7-33.5-15.6-33.5-15.6
    16.3 14.6 33.5 15.6 33.5 15.6zm-345.7 42.5l210.1 4.4c8.4-3.4-23.7-5.1-23.7-5.1 0 0-144.4-5.2-157.6-5.2-13.3
    0-18.6 1.3-26.3 2.6-7.6 1.3-2.5 3.3-2.5 3.3zm-5.6-32.5c33.7-21.2 17.8-28.8 17.8-28.8 7.9-1.4 152.8 2.9 161.3
    3.2-8.3-0.4-142.8-6.9-166.7-6.9-24.6 0.1-25.4 8.6-25.4 8.6-21.8-10.9-32.1-8.3-32.1-8.3 33.4 1.4 45.1 32.2 45.1
    32.2zm-106.6-3.8c3.3 3.8 8.6 5.7 8.6 5.1 1-12.6 10.1-21.6 10.1-21.6-16 4.2-47.2-9-47.2-9-3.2 4.7-1.9 11.9-1.9
    11.9 18.4 1.1 27.2 9.7 30.4 13.6zm183.3-79c33.3 0.8 93.3 34.8 93.3 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.6-3.2-1.6-2.9-2.8
    1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.1-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.2 2.7 4.1 5.8 12.7
    6.6 14.8-17.4-1.2-31.6-2.4-34.8-3.2-9.7-2.3-16.3 0.5-22.2-9.7-5.8-10.2 56.3-15.3 89.7-14.5zm-68.5 18.7c3.1 3 14.5
    4.4 14.5 4.4 0 0 2.2-3.6-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3 0.6 0 3.7zm179.9 38.5h33.2c0.8 0 1.4 0.6 1.4 1.4 0
    0.7-0.6 1.3-1.4 1.3h-33.2c-0.8 0-1.4-0.6-1.4-1.3 0-0.8 0.6-1.4 1.4-1.4zm-142.5-30.8c0 0 57.2 5 65.6 4.3 0 0-0.2-7.3
    4.7-6.9 0 0-4.1 4.8 0.1 7.8 0 0-25.6 2.1-70.4-5.2z"/>
  <path d="m492.5 125.3c0 0-3.9 0.3-4 4.4l-26 4.7c0 0 47.9-1.2 30-9.1z"/>
  <path d="m365.5 99q0.2-0.4 0.4-0.7-0.3 0.4-0.4 0.7z"/>
  <path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/>
  <path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/>
  <path fill-rule="evenodd" d="m218.1 14.9c33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8
    1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5
    14.9-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5zm-68.4 18.7c3.1 3 14.5 4.4 14.5
    4.4 0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/>
  <path fill-rule="evenodd" d="m185.4 42.3c-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5
    33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0
    0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 14.9zm-35.7-8.7c3.1 3 14.5 4.4 14.5 4.4
    0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/>
  <path d="m276.8 36.1c7.2 3.2 4 8.6 3.9 10.3 0 1.8-16.1 4.5-18.2-1.2-2-5.6 2-10.9 2-10.9 0 0 5.2-1.4 12.3 1.8z"/>
  <path fill-rule="evenodd" d="m411.5 77.2c22.1 0 40.1 18 40.1 40.2 0 22.2-18 40.2-40.1 40.2-22.2 0-40.2-18-40.2-40.2 0-22.2 18-40.2
    40.2-40.2zm-32.5 40.2c0 18 14.5 32.5 32.5 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-18 0-32.5 14.5-32.5
    32.5zm10-20.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3
    8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5
    24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9
    8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1
    3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2
    0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/>
  <path d="m415.8 115.7c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2
    0-0.5 0-0.9-0.3-1.7z"/>
  <path d="m412.9 121.8q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/>
  <path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/>
  <path d="m411.5 86.8c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/>
  <path d="m407.9 120.4c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2z"/>
  <path d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7z"/>
  <path fill-rule="evenodd" d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7
    5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3
    2.1 1.1 8.7 2.5 24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4
    13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1
    4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/>
  <path d="m406.8 117.1q0 0 0.1-0.1c0-0.7 0.2-1.4 0.6-2q0 0 0-0.1c0.7-1 1.8-1.8 3.1-2q0 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1
    0 0.1 0.1c1.2 0.4 2.2 1.3 2.7 2.5q0.1 0 0.1 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.2 1-0.6 1.9-1.3 2.6q0 0.1-0.1
    0.1-0.7 0.8-1.8 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.9-0.4l0.1-0.1q-0.1 0-0.1 0.1c-0.6-0.3-1.2-0.7-1.7-1.3q0 0
    0-0.1c-0.7-0.8-1.1-1.8-1.1-2.9q0-0.1 0-0.3z"/>
  <path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/>
  <path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/>
  <path fill-rule="evenodd" d="m92.1 72.8c22.2 0 40.1 18 40.1 40.2 0 22.2-17.9 40.2-40.1 40.2-22.2 0-40.1-18-40.1-40.2 0-22.2
    17.9-40.2 40.1-40.2zm-32.4 40.2c0 18 14.5 32.5 32.4 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-17.9 0-32.4
    14.5-32.4 32.5zm9.9-20.7c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3
    8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9
    0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4
    35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3
    19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2
    0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/>
  <path d="m96.4 111.3c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1
    7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7z"/>
  <path d="m93.5 117.4q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/>
  <path d="m90.3 117.2v0.1q0-0.1 0-0.1z"/>
  <path d="m92.1 82.4c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/>
  <path d="m88.6 116c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2z"/>
  <path d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7
    4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7z"/>
  <path fill-rule="evenodd" d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7
    4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3
    2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4
    13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1
    7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/>
  <path d="m87.5 112.7q0 0 0 0c0-0.8 0.3-1.5 0.6-2.1q0.1 0 0.1-0.1c0.6-1 1.7-1.8 3-2q0.1 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1
    0 0.1 0.1c1.3 0.4 2.2 1.3 2.8 2.5q0 0 0 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.1 1-0.6 1.9-1.3 2.6q0 0.1
    0 0.1-0.8 0.8-1.9 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.8-0.4v-0.1q0 0 0 0.1c-0.7-0.3-1.3-0.7-1.7-1.3q-0.1
    0-0.1-0.1c-0.6-0.7-1-1.8-1-2.9q0-0.1 0-0.3z"/>
  </svg>`;

const sedan: (cb: typeof svgHead, color: Color) => string = (
  cb: (color: Color) => string,
  color: Color
): string => `<svg
  ${cb(color)}
>
<path d="m474.6 97.4c-6.2-1.2-13.9-10.1-13.9-10.1 17.7 1.6 22.1 5.3 22.1 5.3 0 0-1.9 5.9-8.2 4.8z"/>
  <path fill-rule="evenodd" d="m8.2 97c7.5-8.4-5.6-33.5 2.1-42.4 7.7-9 43.8-24.4 43.8-24.4l-5.2-10.4c160.3-29.6 214.6-9.6
    228.8-5.8 14.2 3.8 70.4 34.2 70.4 34.2 140.4 10.3 142.7 40.6 142.7 40.6 9.7 5.9 6.1 27.4 6.1 27.4 0 0 0 11.5-3.3 25.9-3.3
    14.3-46.2 15.8-46.2 15.8 0 0 10.8-60.6-42.3-61.1-53-0.5-50.1 59.6-50.1 59.6h-226.5c0 0 7.9-57.1-45.7-57.1-53.6 0-46.4 52.5-46.4
    52.5l-28.7-9.2c-10.7-19.6-6.9-37.1 0.5-45.6zm5.3-19.3c5 6.5 21.2 1.4 33.2-3.9 11.9-5.3 4.7-5.2 4.7-5.2-26.5 0.3-41-7.7-41-7.7
    0 0-2 10.3 3.1 16.8zm53.4-39.5l-11.5-10.9 2.2 5.5c-40.5 15.3-46.6 25.2-46.6 25.2 0 0 49.6-13.9 53.8-16 4.3-2.1 2.1-3.8
    2.1-3.8zm23.1 4.4c-3.7 5.7-15.8 10.8-4.2 10.9 11.5 0.2 215.5 13.1 215.5 13.1l-1.5-3.1-201.1-12.3c0 0-4.6 0.6-2.5-3.1 2-3.8
    7.1-8.5-4.9-13-12-4.4 0-5.5 0-5.5 0 0 145.6-44.6 246.1 35.8-1.6-2-69.5-84.6-260.5-35.8 0 0 16.8 7.2 13.1 13zm25.8 29.1c0 1.2
    1 2.1 2.2 2.1h19.2c1.2 0 2.1-0.9 2.1-2.1 0-1.2-0.9-2.1-2.1-2.1h-19.2c-1.2 0-2.2 0.9-2.2 2.1zm99.2 66.2c0.5-1.4 13.5-38.2-4.2-72.5
    0 0 9.6 47.2 4.2 72.5zm13.6-64.1c0 1.2 1 2.1 2.1 2.1h19.3c1.1 0 2.1-0.9 2.1-2.1 0-1.2-1-2.1-2.1-2.1h-19.3c-1.1 0-2.1
    0.9-2.1 2.1zm71-27.9c-33-19-86.5-24.2-86.5-24.2l8.3 33.6 75.4 4.8c-2.2-4.8 2.8-14.2 2.8-14.2zm-101.9 9.4l-3.3-34c-20.5-2.5-65
    3.1-65 3.1l1.2 26.5zm-71.2-5.8l-0.9-23.8-14.4 1.5-9.3 22.3zm177.1 13.1l16.4-1.7c0 0-14.4-2-17.2-5.1 0 0-2.8 4 0.8
    6.8zm-120.5-55.5c-65.8-0.3-90.4 11.1-90.4 11.1 70.4-12.3 148.8-4.6 165.7 0 17 4.6 19.3 0 19.3 0 0 0-28.9-10.8-94.6-11.1zm164.6
    43.1c-6.1-3.8-67.2-33.8-65.7-32.5 1.6 1.3-4.3 5.4-4.3 5.4 8.9 2.9 51 28.1 63.8 30.9 12.8 2.9 6.2-3.8 6.2-3.8zm-3.1 19.4c0.4 1.6
    7.1 32.9 3.5 58.4 0 0 8-32.3-3.5-58.4zm19.7-10.4l10 14.6c0 0 61.8-4 83.2 1.8-9.3-2.6-71.1-19.6-93.2-16.4zm72.8 22.5c-4.8 0.8 39.8
    24.4 43.3 19.6 3.4-4.8 7.5-7.9 7.5-7.9-7.9-11.1-46-12.4-50.8-11.7zm55.8 41.7c0 0-6.9-2.7-10.1 1.7-3.2 4.4-4.7 9.4-4.7
    9.4h11zm-481.5 16.5l20.9 6c0 0-3.6-52.9 50.3-50.1 53.8 2.8 50.2 57 50.2 57h218.4c0 0 0.4-59.3 53.2-58.3 52.8 1 46.2 56.5
    46.4 59.9 0.3 3.3 41.3-3.4 38.2-16.4l-31.3 0.3c0 0-2-45.9-54.8-48.4-52.9-2.6-54.4 58.8-54.4 58.8l-209.2-6.1c0
    0-7.7-44.9-47.7-51-40-6.2-56.2 18-60.8 35.3l-20-1.7c0 0-2.3-14.8-6.9-15.4 0 0-1.2 24.9 7.5 30.1z"/>
  <path d="m482.8 92.6c0 0-1.9 5.9-8.2 4.8-6.2-1.2-13.9-10.1-13.9-10.1 17.7 1.6 22.1 5.3 22.1 5.3z"/>
  <path d="m482.8 92.6c0 0-1.9 5.9-8.2 4.8-6.2-1.2-13.9-10.1-13.9-10.1 17.7 1.6 22.1 5.3 22.1 5.3z"/>
  <path fill-rule="evenodd" d="m80.6 114.6c17 0 30.7 13.7 30.7 30.5 0 16.9-13.7 30.6-30.7 30.6-16.9 0-30.6-13.7-30.6-30.6 0-16.8
    13.7-30.5 30.6-30.5zm-9.9 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7 24.7l-19.6-0.5 10.1 15.9c9.1-3
    9.5-15.4 9.5-15.4zm-16.1 19.7l-9.5-17.1-8.6 16.7c7.2 6.4 18.1 0.4 18.1 0.4zm-25.3-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m81.3 103.6c23.5 0 42.6 19 42.6 42.4 0 23.4-19.1 42.4-42.6 42.4-23.6 0-42.7-19-42.7-42.4 0-23.4
    19.1-42.4 42.7-42.4zm-34.4 41.5c0 18.6 15.1 33.6 33.8 33.6 18.6 0 33.7-15 33.7-33.6 0-18.5-15.1-33.5-33.7-33.5-18.7 0-33.8 15-33.8
    33.5z"/>
  <path fill-rule="evenodd" d="m80.6 114.6c17 0 30.7 13.7 30.7 30.5 0 16.9-13.7 30.6-30.7 30.6-16.9 0-30.6-13.7-30.6-30.6 0-16.8
    13.7-30.5 30.6-30.5zm-9.9 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7 24.7l-19.6-0.5 10.1 15.9c9.1-3
    9.5-15.4 9.5-15.4zm-16.1 19.7l-9.5-17.1-8.6 16.7c7.2 6.4 18.1 0.4 18.1 0.4zm-25.3-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m80.6 114.6c17 0 30.7 13.7 30.7 30.5 0 16.9-13.7 30.6-30.7 30.6-16.9 0-30.6-13.7-30.6-30.6 0-16.8
    13.7-30.5 30.6-30.5zm-9.9 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7 24.7l-19.6-0.5 10.1 15.9c9.1-3
    9.5-15.4 9.5-15.4zm-16.1 19.7l-9.5-17.1-8.6 16.7c7.2 6.4 18.1 0.4 18.1 0.4zm-25.3-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m400.7 114.6c16.9 0 30.6 13.7 30.6 30.5 0 16.9-13.7 30.6-30.6 30.6-17 0-30.7-13.7-30.7-30.6 0-16.8
    13.7-30.5 30.7-30.5zm-10 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7.1 24.7l-19.7-0.5 10.1 15.9c9.1-3
    9.6-15.4 9.6-15.4zm-16.1 19.7l-9.6-17.1-8.6 16.7c7.2 6.4 18.2 0.4 18.2 0.4zm-25.4-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m401.3 103.6c23.5 0 42.6 19 42.6 42.4 0 23.4-19.1 42.4-42.6 42.4-23.6 0-42.7-19-42.7-42.4 0-23.4
    19.1-42.4 42.7-42.4zm-34.4 41.5c0 18.6 15.1 33.6 33.8 33.6 18.6 0 33.7-15 33.7-33.6 0-18.5-15.1-33.5-33.7-33.5-18.7 0-33.8
    15-33.8 33.5z"/>
  <path fill-rule="evenodd" d="m400.7 114.6c16.9 0 30.6 13.7 30.6 30.5 0 16.9-13.7 30.6-30.6 30.6-17 0-30.7-13.7-30.7-30.6 0-16.8
    13.7-30.5 30.7-30.5zm-10 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7.1 24.7l-19.7-0.5 10.1 15.9c9.1-3
    9.6-15.4 9.6-15.4zm-16.1 19.7l-9.6-17.1-8.6 16.7c7.2 6.4 18.2 0.4 18.2 0.4zm-25.4-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m400.7 114.6c16.9 0 30.6 13.7 30.6 30.5 0 16.9-13.7 30.6-30.6 30.6-17 0-30.7-13.7-30.7-30.6 0-16.8
    13.7-30.5 30.7-30.5zm-10 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7.1 24.7l-19.7-0.5 10.1 15.9c9.1-3
    9.6-15.4 9.6-15.4zm-16.1 19.7l-9.6-17.1-8.6 16.7c7.2 6.4 18.2 0.4 18.2 0.4zm-25.4-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  </svg>`;

const crossover: (cb: typeof svgHead, color: Color) => string = (
  cb: (color: Color) => string,
  color: Color
): string => `<svg
  ${cb(color)}
>
<path d="m474.6 97.4c-6.2-1.2-13.9-10.1-13.9-10.1 17.7 1.6 22.1 5.3 22.1 5.3 0 0-1.9 5.9-8.2 4.8z"/>
  <path fill-rule="evenodd" d="m8.2 97c7.5-8.4-5.6-33.5 2.1-42.4 7.7-9 43.8-24.4 43.8-24.4l-5.2-10.4c160.3-29.6 214.6-9.6
    228.8-5.8 14.2 3.8 70.4 34.2 70.4 34.2 140.4 10.3 142.7 40.6 142.7 40.6 9.7 5.9 6.1 27.4 6.1 27.4 0 0 0 11.5-3.3 25.9-3.3
    14.3-46.2 15.8-46.2 15.8 0 0 10.8-60.6-42.3-61.1-53-0.5-50.1 59.6-50.1 59.6h-226.5c0 0 7.9-57.1-45.7-57.1-53.6 0-46.4 52.5-46.4
    52.5l-28.7-9.2c-10.7-19.6-6.9-37.1 0.5-45.6zm5.3-19.3c5 6.5 21.2 1.4 33.2-3.9 11.9-5.3 4.7-5.2 4.7-5.2-26.5 0.3-41-7.7-41-7.7
    0 0-2 10.3 3.1 16.8zm53.4-39.5l-11.5-10.9 2.2 5.5c-40.5 15.3-46.6 25.2-46.6 25.2 0 0 49.6-13.9 53.8-16 4.3-2.1 2.1-3.8
    2.1-3.8zm23.1 4.4c-3.7 5.7-15.8 10.8-4.2 10.9 11.5 0.2 215.5 13.1 215.5 13.1l-1.5-3.1-201.1-12.3c0 0-4.6 0.6-2.5-3.1 2-3.8
    7.1-8.5-4.9-13-12-4.4 0-5.5 0-5.5 0 0 145.6-44.6 246.1 35.8-1.6-2-69.5-84.6-260.5-35.8 0 0 16.8 7.2 13.1 13zm25.8 29.1c0 1.2
    1 2.1 2.2 2.1h19.2c1.2 0 2.1-0.9 2.1-2.1 0-1.2-0.9-2.1-2.1-2.1h-19.2c-1.2 0-2.2 0.9-2.2 2.1zm99.2 66.2c0.5-1.4 13.5-38.2-4.2-72.5
    0 0 9.6 47.2 4.2 72.5zm13.6-64.1c0 1.2 1 2.1 2.1 2.1h19.3c1.1 0 2.1-0.9 2.1-2.1 0-1.2-1-2.1-2.1-2.1h-19.3c-1.1 0-2.1
    0.9-2.1 2.1zm71-27.9c-33-19-86.5-24.2-86.5-24.2l8.3 33.6 75.4 4.8c-2.2-4.8 2.8-14.2 2.8-14.2zm-101.9 9.4l-3.3-34c-20.5-2.5-65
    3.1-65 3.1l1.2 26.5zm-71.2-5.8l-0.9-23.8-14.4 1.5-9.3 22.3zm177.1 13.1l16.4-1.7c0 0-14.4-2-17.2-5.1 0 0-2.8 4 0.8
    6.8zm-120.5-55.5c-65.8-0.3-90.4 11.1-90.4 11.1 70.4-12.3 148.8-4.6 165.7 0 17 4.6 19.3 0 19.3 0 0 0-28.9-10.8-94.6-11.1zm164.6
    43.1c-6.1-3.8-67.2-33.8-65.7-32.5 1.6 1.3-4.3 5.4-4.3 5.4 8.9 2.9 51 28.1 63.8 30.9 12.8 2.9 6.2-3.8 6.2-3.8zm-3.1 19.4c0.4 1.6
    7.1 32.9 3.5 58.4 0 0 8-32.3-3.5-58.4zm19.7-10.4l10 14.6c0 0 61.8-4 83.2 1.8-9.3-2.6-71.1-19.6-93.2-16.4zm72.8 22.5c-4.8 0.8 39.8
    24.4 43.3 19.6 3.4-4.8 7.5-7.9 7.5-7.9-7.9-11.1-46-12.4-50.8-11.7zm55.8 41.7c0 0-6.9-2.7-10.1 1.7-3.2 4.4-4.7 9.4-4.7
    9.4h11zm-481.5 16.5l20.9 6c0 0-3.6-52.9 50.3-50.1 53.8 2.8 50.2 57 50.2 57h218.4c0 0 0.4-59.3 53.2-58.3 52.8 1 46.2 56.5
    46.4 59.9 0.3 3.3 41.3-3.4 38.2-16.4l-31.3 0.3c0 0-2-45.9-54.8-48.4-52.9-2.6-54.4 58.8-54.4 58.8l-209.2-6.1c0
    0-7.7-44.9-47.7-51-40-6.2-56.2 18-60.8 35.3l-20-1.7c0 0-2.3-14.8-6.9-15.4 0 0-1.2 24.9 7.5 30.1z"/>
  <path d="m482.8 92.6c0 0-1.9 5.9-8.2 4.8-6.2-1.2-13.9-10.1-13.9-10.1 17.7 1.6 22.1 5.3 22.1 5.3z"/>
  <path d="m482.8 92.6c0 0-1.9 5.9-8.2 4.8-6.2-1.2-13.9-10.1-13.9-10.1 17.7 1.6 22.1 5.3 22.1 5.3z"/>
  <path fill-rule="evenodd" d="m80.6 114.6c17 0 30.7 13.7 30.7 30.5 0 16.9-13.7 30.6-30.7 30.6-16.9 0-30.6-13.7-30.6-30.6 0-16.8
    13.7-30.5 30.6-30.5zm-9.9 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7 24.7l-19.6-0.5 10.1 15.9c9.1-3
    9.5-15.4 9.5-15.4zm-16.1 19.7l-9.5-17.1-8.6 16.7c7.2 6.4 18.1 0.4 18.1 0.4zm-25.3-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m81.3 103.6c23.5 0 42.6 19 42.6 42.4 0 23.4-19.1 42.4-42.6 42.4-23.6 0-42.7-19-42.7-42.4 0-23.4
    19.1-42.4 42.7-42.4zm-34.4 41.5c0 18.6 15.1 33.6 33.8 33.6 18.6 0 33.7-15 33.7-33.6 0-18.5-15.1-33.5-33.7-33.5-18.7 0-33.8 15-33.8
    33.5z"/>
  <path fill-rule="evenodd" d="m80.6 114.6c17 0 30.7 13.7 30.7 30.5 0 16.9-13.7 30.6-30.7 30.6-16.9 0-30.6-13.7-30.6-30.6 0-16.8
    13.7-30.5 30.6-30.5zm-9.9 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7 24.7l-19.6-0.5 10.1 15.9c9.1-3
    9.5-15.4 9.5-15.4zm-16.1 19.7l-9.5-17.1-8.6 16.7c7.2 6.4 18.1 0.4 18.1 0.4zm-25.3-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m80.6 114.6c17 0 30.7 13.7 30.7 30.5 0 16.9-13.7 30.6-30.7 30.6-16.9 0-30.6-13.7-30.6-30.6 0-16.8
    13.7-30.5 30.6-30.5zm-9.9 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7 24.7l-19.6-0.5 10.1 15.9c9.1-3
    9.5-15.4 9.5-15.4zm-16.1 19.7l-9.5-17.1-8.6 16.7c7.2 6.4 18.1 0.4 18.1 0.4zm-25.3-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m400.7 114.6c16.9 0 30.6 13.7 30.6 30.5 0 16.9-13.7 30.6-30.6 30.6-17 0-30.7-13.7-30.7-30.6 0-16.8
    13.7-30.5 30.7-30.5zm-10 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7.1 24.7l-19.7-0.5 10.1 15.9c9.1-3
    9.6-15.4 9.6-15.4zm-16.1 19.7l-9.6-17.1-8.6 16.7c7.2 6.4 18.2 0.4 18.2 0.4zm-25.4-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m401.3 103.6c23.5 0 42.6 19 42.6 42.4 0 23.4-19.1 42.4-42.6 42.4-23.6 0-42.7-19-42.7-42.4 0-23.4
    19.1-42.4 42.7-42.4zm-34.4 41.5c0 18.6 15.1 33.6 33.8 33.6 18.6 0 33.7-15 33.7-33.6 0-18.5-15.1-33.5-33.7-33.5-18.7 0-33.8
    15-33.8 33.5z"/>
  <path fill-rule="evenodd" d="m400.7 114.6c16.9 0 30.6 13.7 30.6 30.5 0 16.9-13.7 30.6-30.6 30.6-17 0-30.7-13.7-30.7-30.6 0-16.8
    13.7-30.5 30.7-30.5zm-10 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7.1 24.7l-19.7-0.5 10.1 15.9c9.1-3
    9.6-15.4 9.6-15.4zm-16.1 19.7l-9.6-17.1-8.6 16.7c7.2 6.4 18.2 0.4 18.2 0.4zm-25.4-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  <path fill-rule="evenodd" d="m400.7 114.6c16.9 0 30.6 13.7 30.6 30.5 0 16.9-13.7 30.6-30.6 30.6-17 0-30.7-13.7-30.7-30.6 0-16.8
    13.7-30.5 30.7-30.5zm-10 6.6l10 16.9 8.2-16.9c-7.4-6.2-18.2 0-18.2 0zm6.4 23.9c0 2.3 1.9 4.1 4.2 4.1 2.3 0 4.1-1.8 4.1-4.1
    0-2.2-1.8-4-4.1-4-2.3 0-4.2 1.8-4.2 4zm21.7-19.1l-10.5 16.6 18.9-0.5c2.1-9.3-8.4-16.1-8.4-16.1zm7.1 24.7l-19.7-0.5 10.1 15.9c9.1-3
    9.6-15.4 9.6-15.4zm-16.1 19.7l-9.6-17.1-8.6 16.7c7.2 6.4 18.2 0.4 18.2 0.4zm-25.4-4l10.5-16.6-18.9 0.5c-2.1 9.4 8.4 16.1 8.4
    16.1zm9.6-24.3l-12.1-14.4c-8.7 4.2-7.4 16.6-7.4 16.6z"/>
  </svg>`;

export const svgHead: (color: Color) => string = (color: Color): string => `version="1.2"
xmlns="http://www.w3.org/2000/svg"
width="100px"
height="30px"
viewBox="0 0 300 200"
fill="${color}"`;

export const carIcons: ((cb: typeof svgHead, color: Color) => string)[] = [jeep, sportCar, sedan, crossover];
