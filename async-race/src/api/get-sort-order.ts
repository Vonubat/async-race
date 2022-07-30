import { GetSortOrderFn, Order, Sort } from '../types/types';

const getSortOrder: GetSortOrderFn = (sort: Sort, order: Order): string => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

export default getSortOrder;
