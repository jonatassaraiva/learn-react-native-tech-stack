import localData from './data.json';

export const fetchLibraresTypes = {
  REQUEST: 'REQUEST_LIBRARY',
  RECEIVE: 'RECEIVE_LIBRARY'
};

export const fetchLibrares = () => (dispatch) => {
  dispatch(request());
  return dispatch(receive(localData));
};

const request = () => ({
  type: fetchLibraresTypes.REQUEST
});

const receive = data => ({
  type: fetchLibraresTypes.RECEIVE,
  payload: data
});
