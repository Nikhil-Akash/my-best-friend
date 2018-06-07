import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubBreed } from '../action/index';

class SubBreedMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubBreed: false
    }
  }

  toggleSelectSubBreed = (breedName, index) => {
    this.setState({
      selectedSubBreed: !this.state.selectedSubBreed
    })

    this.props.selectSubBreed(breedName)
  }

  render() {

    const theSubBreeds = this.props.subBreedList.map((subBreed, index) =>     <li key={index} class="gds-ranker__item">
            <div class="gds-ranker__item-icon" data-tooltip={subBreed}>
                <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" alt={subBreed}/>
            </div>
            <div class="gds-ranker__item-number gds-ranker__item-number--secondary">{subBreed}</div>
        </li>)

    return (
      <div class="gds-leaderboard__topfive">
          <div class="gds-ranker gds-ranker--lg">
            <ul class="gds-ranker__list">
                {theSubBreeds}
            </ul>
            <div class="gds-ranker__connector"></div>
          </div>
      </div>
    );
  }
}


export default connect(null, { selectSubBreed })(SubBreedMenu);
