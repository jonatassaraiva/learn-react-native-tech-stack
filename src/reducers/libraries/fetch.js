import { fetchLibraresTypes } from '../../actions/library/fetch';

const initialState = {
  isFetching: false,
  items: []
};

export default function fetch(state = initialState, action) {
  switch (action.type) {
    case fetchLibraresTypes.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case fetchLibraresTypes.RECEIVE:
      return {
        ...state,
        isFetching: false,
        items: action.payload
      };
    default:
      return state;
  }
}