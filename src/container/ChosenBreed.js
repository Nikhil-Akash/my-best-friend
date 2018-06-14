import React, { Component } from 'react';
import BreedProfile from './BreedProfile';

class ChosenBreed extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubBreed: false
    }
  }

  render() {

    return (
      <div className="selectedBreed">
        <h1 className="gds-text--header-md -text-center -text-tr-cap">{this.props.breedName}</h1>
          <BreedProfile
            breed={this.props.breed}
            breedName={this.props.breedName}
            haveSubBreeds={this.props.haveSubBreeds}
            selectedSubBreed={this.state.selectedSubBreed}
            subBreed={this.props.subBreed}
          />
      </div>
    );
  }
}

export default ChosenBreed;
