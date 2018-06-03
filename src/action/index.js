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

export const selectBreed = (breed, breedId) => {
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${breedId}/images`)
      .then(response => response.json())
      .then(breed => {
        dispatch(getBreed(breed))
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

export const selectSubBreed = (breed, breedId) => {
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${breedId}/list`)
      .then(response => response.json())
      .then(breed => {
        dispatch(getSubBreed(breed))
      })
      .catch(error => console.log(error));
  };
}

const getSubBreed = breed => {
  return {
    type: types.REQUEST_SUB_BREED,
    breed
  }
}
