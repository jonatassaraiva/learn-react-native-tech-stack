import { selectLibraryTypes } from '../../actions/library/select';

const initialState = {
  id: 0
};

export default function select(state = initialState, action) {
  switch (action.type) {
    case selectLibraryTypes.SELECT:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
}