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
    type: types.REQUEST_BREED,
    breed
  }
}

export const loadSubBreeds = (breedName) => {
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${breedName}/list`)
      .then(response => response.json())
      .then(subBreeds => {
        dispatch(getAllSubBreeds(subBreeds.message))
      })
      .catch(error => console.log(error));
  };
}

const getAllSubBreeds = subBreeds => {
  return {
    type: types.REQUEST_ALL_SUB_BREEDS,
    subBreeds
  }
}

export const selectSubBreed = (breedName, subBreedName) => {
  return (dispatch) => {
    return fetch(`https://dog.ceo/api/breed/${breedName}/${subBreedName}/images`)
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
