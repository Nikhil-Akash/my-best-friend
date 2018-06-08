import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubBreed } from '../action/index';

class SubBreedMenu extends Component {

  toggleSelectSubBreed = (breedName, index) => {
    this.setState({
      selectedSubBreed: !this.state.selectedSubBreed
    })
    this.props.selectSubBreed(breedName)
  }

  render() {
    
    const theSubBreeds = this.props.haveSubBreeds.map((subBreed, index) =>     <li key={index} className="gds-ranker__item">
            <div className="gds-ranker__item-icon" data-tooltip={subBreed}>
                <img className="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" alt={subBreed} onClick={()=>this.toggleSelectSubBreed()}/>
            </div>
            <div className="gds-ranker__item-number gds-ranker__item-number--secondary">{subBreed}</div>
        </li>)

    return (
      <div className="gds-leaderboard__topfive">
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
