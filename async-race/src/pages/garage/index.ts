import getCars from '../../api/get-cars';
import { CarsResponse } from '../../types/types';
import generate100Cars from '../../utilities/generate-100cars';
import { getPageCounter } from '../../utilities/get-set-page-counter';
import generatePageCounter from '../../view/page-counter';
import genearatePageName from '../../view/page-name';
import generateAllTracks from '../../view/tracks';

export const generateCars: () => Promise<CarsResponse> = async (): Promise<CarsResponse> => {
  await generate100Cars();
  const carResponse: CarsResponse = await getCars(getPageCounter('Garage'));
  genearatePageName(carResponse, 'Garage');
  generatePageCounter('Garage');
  const placeForTrackContainer: HTMLElement | null = document.getElementById('page-counter-garage');
  placeForTrackContainer?.after(generateAllTracks(carResponse));

  return carResponse;
};
