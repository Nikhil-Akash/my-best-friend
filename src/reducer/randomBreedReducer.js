import * as types from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_RANDOM_BREED:
      return action.randomBreed

    default:
      return state;
  }
}
