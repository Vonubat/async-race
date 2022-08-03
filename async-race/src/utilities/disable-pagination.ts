import { GARAGE_LIMIT, WINNERS_LIMIT } from '../api/variables';
import { CarsResponse, Page, WinnersResponse } from '../types/types';
import { getPageCounter } from './get-set-page-counter';

const disablePagination: (value: CarsResponse | WinnersResponse, page: Page) => Promise<void> = async (
  value: CarsResponse | WinnersResponse,
  page: Page
): Promise<void> => {
  const paginationNextBtn: HTMLElement | null = document.getElementById(`btn-next-${page.toLowerCase()}`);
  const paginationPrevBtn: HTMLElement | null = document.getElementById(`btn-prev-${page.toLowerCase()}`);
  if (!paginationNextBtn || !paginationPrevBtn) {
    throw new Error("updateCarBtn doesn't exist");
  }

  const currentPage: number = getPageCounter(`${page}`);
  let lastPage: number;
  if (page === 'Garage') {
    lastPage = Math.ceil(Number(value.count) / GARAGE_LIMIT);
  } else {
    lastPage = Math.ceil(Number(value.count) / WINNERS_LIMIT);
  }

  const startPage = 1;

  if (currentPage >= lastPage) {
    paginationNextBtn.classList.add('disabled');
  } else {
    paginationNextBtn.classList.remove('disabled');
  }
  if (currentPage <= startPage) {
    paginationPrevBtn.classList.add('disabled');
  } else {
    paginationPrevBtn.classList.remove('disabled');
  }
};

export default disablePagination;
