import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubBreed } from '../action/index';

class SubBreedMenu extends Component {

  toggleSelectSubBreed = (breedName, subBreed, index) => {
    this.setState({
      selectedSubBreed: !this.props.selectedSubBreed
    })
    this.props.selectSubBreed(breedName, subBreed)
  }

  render() {
    const breedName = this.props.breedName
    const theSubBreeds = this.props.haveSubBreeds.map((subBreed, index) =>
      <li key={index} className="gds-ranker__item">
        <div className="gds-ranker__item-icon" data-tooltip={subBreed}>
          <img className="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" alt={subBreed} onClick={()=>this.toggleSelectSubBreed(breedName, subBreed)}/>
        </div>
        <div className="gds-ranker__item-number gds-ranker__item-number--secondary">{index}</div>
      </li>
    );

    return (
      <div>
        <h4 className="-text-center">Choose a Sub-Breed</h4>
        <div className="gds-ranker gds-ranker--lg">
          <ul className="gds-ranker__list">
            {theSubBreeds}
          </ul>
          <div className="gds-ranker__connector"></div>
        </div>
      </div>
    );
  }
}

export default connect(null, { selectSubBreed })(SubBreedMenu);
