import { combineReducers } from 'redux';
import breedsReducer from './breedsReducer';
import breedReducer from './breedReducer';
import subBreedReducer from './subBreedReducer';

const rootReducer = combineReducers({
 breeds: breedsReducer,
 breed: breedReducer,
 subBreed: subBreedReducer,
});

export default rootReducer;
