import { GARAGE_LIMIT } from '../api/variables';
import { CarsResponse, Page } from '../types/types';
import { getPageCounter } from './get-set-page-counter';

const disablePagination: (value: CarsResponse, page: Page) => Promise<void> = async (
  value: CarsResponse,
  page: Page
): Promise<void> => {
  const paginationNextBtn: HTMLElement | null = document.getElementById('btn-next-garage');
  const paginationPrevBtn: HTMLElement | null = document.getElementById('btn-prev-garage');
  if (!paginationNextBtn || !paginationPrevBtn) {
    throw new Error("updateCarBtn doesn't exist");
  }
  const currentPage: number = getPageCounter(`${page}`);
  const lastPage: number = Math.ceil(Number(value.count) / GARAGE_LIMIT);
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
