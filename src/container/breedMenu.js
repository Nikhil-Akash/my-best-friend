import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBreed, selectSubBreed } from '../action/index';
import SelectedBreed from './selectedBreed'

class BreedMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      breedName: ""
    }
  }

  toggleSelectedBreed = (breedName) => {
    this.setState({
      selectedBreed: !this.state.selectBreed,
      breedName: breedName,
    })
    this.props.selectBreed(breedName)
    this.props.selectSubBreed(breedName)
  }

  render() {
    const listOfBreeds = Object.keys(this.props.breeds)

    const breedItems = listOfBreeds.map((breedName, index) =>
      <li key={index}><a onClick={() => this.toggleSelectedBreed(breedName)}>{breedName}</a></li>
    );

    return (
      <div>
        {!this.state.selectedBreed ?
          <nav className="-float-left">
            <ul className="gds-nav-tabs gds-nav-tabs--stacked">
              <li><input placeholder="Search Breed" /></li>
              <li># of Breeds: {listOfBreeds.length}</li>
              {breedItems}
            </ul>
          </nav>
        :
          <SelectedBreed
            breed={this.props.breed}
            breedName={this.state.breedName}
            subBreedList={this.props.subBreed}
          />
        }
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    breeds: state.breeds,
    breed: state.breed,
    subBreed: state.subBreed
  });
};

export default connect(mapStatesToProps, { selectBreed, selectSubBreed })(BreedMenu);
