import * as types from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_ALL_SUB_BREEDS:
      return action.subBreeds

    default:
      return state;
  }
}
