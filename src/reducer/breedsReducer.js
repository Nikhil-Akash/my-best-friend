import * as types from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_ALL_BREEDS:
      return action.breeds;

    default:
      return state;
  }
}
