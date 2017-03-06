import localData from './data.json';

export const fetchLibraresTypes = {
  REQUEST: 'REQUEST_LIBRARY',
  RECEIVE: 'RECEIVE_LIBRARY'
};

export const fetchLibrares = () => (dispatch) => {
  dispatch(request());
  setTimeout(function() {
    return dispatch(receive(localData));
  }, 2000);
};

const request = () => ({
  type: fetchLibraresTypes.REQUEST
});

const receive = data => ({
  type: fetchLibraresTypes.RECEIVE,
  payload: data
});
