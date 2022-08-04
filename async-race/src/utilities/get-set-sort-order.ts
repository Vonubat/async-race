import { Order, Sort } from '../types/types';

let sort: Sort = 'id';
let order: Order = 'ASC';

export const setSort: (value: Sort) => Sort = (value: Sort): Sort => {
  sort = value;
  return sort;
};

export const setOrder: (value: Order) => Order = (value: Order): Order => {
  order = value;
  return order;
};

export const getSort: () => Sort = (): Sort => {
  console.log(sort);
  return sort;
};

export const getOrder: () => Order = (): Order => {
  console.log(order);
  return order;
};
