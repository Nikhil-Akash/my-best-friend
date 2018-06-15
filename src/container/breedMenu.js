import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBreed, loadSubBreeds, selectSubBreed } from '../action/index';

class BreedMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      breedName: "",
    }
  }

  toggleSelectedBreed = (breedName) => {
    this.setState({
      breedName: breedName,
    })
    this.props.selectBreed(breedName)
    this.props.loadSubBreeds(breedName)
    this.props.history.push({
      pathname: `/all_dogs/${breedName}`,
      state: {breedName: breedName}
    })
  }

  render() {
    const listOfBreeds = Object.keys(this.props.breeds)

    const breedItems = listOfBreeds.map((breedName, index) =>
      <li key={index} className="gds-nav-tabs__list-item" data-gds-nav-item=""><a className="gds-nav-tabs__link" data-gds-nav-button={index} data-gds-nav-type="tab" onClick={() => this.toggleSelectedBreed(breedName)}>{breedName}</a></li>
    );

    return (
      <div>
        <nav className="-m-b-3 -float-left -clear-right">
          <ul className="gds-nav-tabs gds-nav-tabs--stacked" data-gds-nav="3">
            <li className="gds-text--body-sm"><a className="gds-nav-tabs__link">All {listOfBreeds.length} Dog Breeds</a></li>
            {breedItems}
          </ul>
        </nav>
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
