import { combineReducers } from 'redux';
import breedsReducer from './breedsReducer';
import breedReducer from './breedReducer';
import subBreedsReducer from './subBreedsReducer';
import subBreedReducer from './subBreedReducer';

const rootReducer = combineReducers({
 breeds: breedsReducer,
 breed: breedReducer,
 subBreeds: subBreedsReducer,
 subBreed: subBreedReducer,
});

export default rootReducer;
