import React from 'react';

const AllBreeds = ({toggleChooseBreed}) => {
  return (
    <a id="allBreeds" className="gds-text--link" onClick={toggleChooseBreed}>All Breeds</a>
  );
}

export default AllBreeds;
