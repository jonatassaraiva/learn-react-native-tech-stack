export const selectLibraryTypes = {
  SELECT: 'SELECT_LIBRARY'
};

export const selectLibrary = (id) => (dispatch) => {
  return dispatch(select(id));
};

const select = payload => ({
  type: selectLibraryTypes.SELECT,
  payload
});
