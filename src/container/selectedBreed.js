import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';

class SelectedBreed extends Component {

  render() {

    const allImages = this.props.breed.map((image, index) => <img key={index} class="gds-image" src={image} alt="Dog"/> );

    return (
      <div className="selectedBreed">
        <h1 className="gds-text--header-md -text-center">{this.props.breedName}</h1>

        {(this.props.subBreedList.length > 0) ?
          <SubBreedMenu
            breedName={this.props.breedName}
            subBreedList={this.props.subBreedList}
          />
        :
          null
        }

        {this.props.selectedSubBreed ?

          <p>hello</p>

        :
          <div className="gds-container">
            {allImages}
          </div>
        }

      </div>
    );
  }
}

export default SelectedBreed;
