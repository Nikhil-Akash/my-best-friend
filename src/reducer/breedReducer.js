import * as types from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_BREED_IMAGES:
      return action.breed

    default:
      return state;
  }
}
