import React, { Component } from 'react';
import BreedProfile from './BreedProfile';
import { connect } from 'react-redux';

class ChosenBreed extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubBreed: false,
    }
  }

  render() {
    return (
      <div className="selectedBreed">
        <h1 className="gds-text--header-md -text-center -text-tr-cap">{this.props.match.params.breeds}</h1>
          <BreedProfile
            breed={this.props.breed}
            breedName={this.props.match.params.breeds}
            subBreeds={this.props.subBreeds}
            selectedSubBreed={this.state.selectedSubBreed}
            subBreed={this.props.subBreed}
          />
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    breeds: state.breeds,
    breed: state.breed,
    subBreeds: state.subBreeds,
    subBreed: state.subBreed
  });
};

export default connect(mapStatesToProps)(ChosenBreed);
