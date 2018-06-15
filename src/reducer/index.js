import { combineReducers } from 'redux';
import breedsReducer from './breedsReducer';
import breedReducer from './breedReducer';
import subBreedsReducer from './subBreedsReducer';
import subBreedReducer from './subBreedReducer';
import randomBreedReducer from './randomBreedReducer';

const rootReducer = combineReducers({
 breeds: breedsReducer,
 breed: breedReducer,
 subBreeds: subBreedsReducer,
 subBreed: subBreedReducer,
 randomBreed: randomBreedReducer
});

export default rootReducer;
