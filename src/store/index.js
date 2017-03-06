import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/root';

const store = {
  configure: () => {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    return createStoreWithMiddleware(rootReducer);
  }
};

export default store;