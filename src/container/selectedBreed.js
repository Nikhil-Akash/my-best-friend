import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';

class SelectedBreed extends Component {

  render() {
    const allImages = this.props.breed.map((image, index) => <img key={index} src={image} alt="test"/> );

    return (
      <div>
        <h1 className="-text-center">{this.props.breedName}</h1>

        {(this.props.subBreedList.length > 0) ?
          <SubBreedMenu
            breedName={this.props.breedName}
            subBreedList={this.props.subBreedList}
          />
        :
          null
        }

        {allImages}

      </div>
    );
  }
}

export default SelectedBreed;
