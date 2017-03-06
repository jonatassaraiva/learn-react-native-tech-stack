import { combineReducers } from 'redux';

import fetch from './fetch';
import select from './select';

export default combineReducers({
  fetch: fetch,
  select: select
});