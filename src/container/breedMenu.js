import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBreed, loadSubBreeds, selectSubBreed } from '../action/index';
import SelectedBreed from './selectedBreed'

class BreedMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      breedName: "",
    }
  }

  toggleSelectedBreed = (breedName) => {
    this.setState({
      selectedBreed: !this.state.selectBreed,
      breedName: breedName,
    })
    this.props.selectBreed(breedName)
    this.props.loadSubBreeds(breedName)
  }

  render() {
    const listOfBreeds = Object.keys(this.props.breeds)

    const breedItems = listOfBreeds.map((breedName, index) =>
      <li key={index} className="gds-nav-tabs__list-item" data-gds-nav-item=""><a className="gds-nav-tabs__link" data-gds-nav-button={index} data-gds-nav-type="tab" onClick={() => this.toggleSelectedBreed(breedName)}>{breedName}</a></li>
    );

    return (
      <div>
        {!this.state.selectedBreed ?
          <nav className="-float-left -m-b-3" data-gds-nav-controls="">
            <ul className="gds-nav-tabs gds-nav-tabs--stacked" data-gds-nav="3">
              <li># of Breeds: {listOfBreeds.length}</li>
              {breedItems}
            </ul>
          </nav>
        :
          <SelectedBreed
            breed={this.props.breed}
            breedName={this.state.breedName}
            haveSubBreeds={this.props.subBreeds}
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
    subBreeds: state.subBreeds,
    subBreed: state.subBreed
  });
};

export default connect(mapStatesToProps, { selectBreed, loadSubBreeds, selectSubBreed })(BreedMenu);
