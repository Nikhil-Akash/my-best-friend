import * as types from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_SUB_BREED:
      return action.subBreed

    default:
      return state;
  }
}
