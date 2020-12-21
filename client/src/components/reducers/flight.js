import { FLIGHT, FLIGHT_ERROR, FLIGHTS, LIST_FLIGHTS } from '../actions/types';

const INITIAL_STATE = {
  flight: '',
  flights: '',
  listFlights: '',
  errorMessage: '',
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FLIGHT:
      return { ...state, flight: action.payload || false };
    case FLIGHTS:
      return { ...state, flights: action.payload || false };
    case LIST_FLIGHTS:
      return { ...state, listFlights: action.payload || false };
    case FLIGHT_ERROR:
      return { ...state, errorMessage: action.payload || false };
    default:
      return state;
  }
};

export default auth;
