import * as types from './actionTypes'

export const loadAllBreeds = () => {
  return (dispatch) => {
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(breeds => {
        dispatch(getAllBreeds(breeds.message))
      })
      .catch(error => console.log(error));
  };
}

const getAllBreeds = breeds => {
  return {
    type: types.REQUEST_ALL_BREEDS,
    breeds
  }
}

export const selectBreed = (breedName) => {
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
      .then(response => response.json())
      .then(breed => {
        dispatch(getBreed(breed.message))
      })
      .catch(error => console.log(error));
  };
}

const getBreed = breed => {
  return {
    type: types.REQUEST_BREED_FAMILY,
    breed
  }
}

export const selectSubBreed = (breedName) => {
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${breedName}/list`)
      .then(response => response.json())
      .then(subBreed => {
        dispatch(getSubBreed(subBreed.message))
      })
      .catch(error => console.log(error));
  };
}

const getSubBreed = subBreed => {
  return {
    type: types.REQUEST_SUB_BREED,
    subBreed
  }
}
