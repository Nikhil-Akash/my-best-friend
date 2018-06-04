import * as types from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_ALL_BREEDS:
      return action.breeds;

    case types.REQUEST_BREED_FAMILY:
      return action.breed;

    // case types.REQUEST_SUB_BREED:
    //   return action.breed;

    default:
      return state;
  }
}
