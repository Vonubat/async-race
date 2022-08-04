import { CarsResponse, Page, WinnersResponse } from '../types/types';
import { getCurrentPage, getLastPage } from './get-set-page-counter';

const disablePagination: (page: Page, value: CarsResponse | WinnersResponse) => void = (
  page: Page,
  value: CarsResponse | WinnersResponse
): void => {
  const paginationNextBtn: HTMLElement | null = document.getElementById(`btn-next-${page.toLowerCase()}`);
  const paginationPrevBtn: HTMLElement | null = document.getElementById(`btn-prev-${page.toLowerCase()}`);
  if (!paginationNextBtn || !paginationPrevBtn) {
    throw new Error("updateCarBtn doesn't exist");
  }

  const startPage = 1;
  const currentPage = getCurrentPage(page);
  const lastPage = getLastPage(page, value);

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
