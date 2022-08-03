import getCarsAPI from '../api/get-cars';
import getWinnersAPI from '../api/get-winners';
import { CarsResponse, Page, WinnersResponse } from '../types/types';
import generatePageCounter from '../view/page-counter';
import generatePageName from '../view/page-name';
import generateTable from '../view/table';
import generateAllTracks from '../view/tracks';
import disablePagination from './disable-pagination';
import { getPageCounter } from './get-set-page-counter';
import {
  setRemoveCarBtnsListener,
  setSelectCarBtnsListener,
  setStartBtnListener,
  setStopBtnListener,
} from './set-event-listeners';

const updatePage: (page: Page) => Promise<CarsResponse | WinnersResponse> = async (
  page: Page
): Promise<CarsResponse | WinnersResponse> => {
  let response: CarsResponse | WinnersResponse;
  if (page === 'Garage') {
    response = await getCarsAPI(getPageCounter(page));
  } else {
    response = await getWinnersAPI({
      pageNumber: getPageCounter(page),
      sort: 'id',
      order: 'ASC',
    });
  }
  try {
    generatePageName(response, page);
    generatePageCounter(page);
    disablePagination(response, page);
    const placeForElement: HTMLElement | null = document.getElementById(`page-counter-${page.toLocaleLowerCase()}`);
    if (page === 'Garage') {
      placeForElement?.after(generateAllTracks(response as CarsResponse));
      setSelectCarBtnsListener();
      setRemoveCarBtnsListener();
      setStartBtnListener();
      setStopBtnListener();
    } else {
      placeForElement?.after(generateTable(response as WinnersResponse));
    }
    return response;
  } catch (error) {
    console.log('json data is empty');
    return response;
  }
};

export default updatePage;
