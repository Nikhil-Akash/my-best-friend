import React, { Component } from 'react';
// import { sideNavbar } from './sideNavbar'

class SelectedBreed extends Component {
  render() {
    const allImages = this.props.breed.map((image, index) => <img key={index} src={image} alt="test"/> );

    return (
      <div>
        <h1 className="-text-center">{this.props.breedName}</h1>

        {allImages}

        {/* Selected Breed screen will have a side nav bar to select another breed; when selected, the side nav bar will clear off side */}

      </div>
    );
  }
}

export default SelectedBreed;
