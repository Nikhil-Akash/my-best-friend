import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubBreed } from '../action/index';

class SubBreedMenu extends Component {

  toggleSelectSubBreed = (breedName, subBreed, index) => {
    this.setState({
      selectedSubBreed: !this.props.selectedSubBreed,
      subBreedName: subBreed
    })
    this.props.selectSubBreed(breedName, subBreed)
  }

  render() {
    const breedName = this.props.breedName
    const theSubBreeds = this.props.subBreeds.map((subBreed, index) =>
      <div key={index} className="gds-ranker-grid__ensign gds-ranker-ensign--secondary">
        <span className="gds-number-circle">{index+1}</span>
        <div className="gds-ranker-ensign__content">
          <span className="gds-ranker-ensign__title--lg" onClick={()=>this.toggleSelectSubBreed(breedName, subBreed)}>{subBreed}</span>
        </div>
      </div>
    );

    return (
      <div>
        <h4 className="gds-text--header-sm gds-text--bold -m-b-2 -text-center">Choose a Sub-Breed</h4>
        <div className="gds-ranker-grid">
          {theSubBreeds}
        </div>
      </div>
    );
  }
}

export default connect(null, { selectSubBreed })(SubBreedMenu);
