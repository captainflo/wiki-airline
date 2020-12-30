import { ORDER_ERROR, ORDERS } from '../actions/types';

const INITIAL_STATE = {
  orders: '',
  errorMessage: '',
};

const order = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDERS:
      return { ...state, orders: action.payload || false };
    case ORDER_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default order;
