import { combineReducers } from 'redux';
import breedsReducer from './breedsReducer';
import breedReducer from './breedReducer';

const rootReducer = combineReducers({
 breeds: breedsReducer,
 breed: breedReducer,
});

export default rootReducer;
