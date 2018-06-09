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

  toggleSelectSubBreed = (breedName, subBreed, index) => {
    this.setState({
      selectedSubBreed: !this.state.selectedSubBreed
    })
    this.props.selectSubBreed(breedName, subBreed)
  }

  render() {
    debugger
    const breedName = this.props.breedName
    const theSubBreeds = this.props.haveSubBreeds.map((subBreed, index) =>     <li key={index} className="gds-ranker__item">
            <div className="gds-ranker__item-icon" data-tooltip={subBreed}>
                <img className="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" alt={subBreed} onClick={()=>this.toggleSelectSubBreed(breedName, subBreed)}/>
            </div>
            <div className="gds-ranker__item-number gds-ranker__item-number--secondary">{subBreed}</div>
        </li>)

    const subBreedImg = this.props.subBreed.map((subBreedImg, index) => <div key={index}>
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={subBreedImg} alt="Dog"/>

          <span className="gds-ranker-ensign__number">
            {index}
          </span>
      </div>);

    return (
      <div className="gds-leaderboard__topfive">
          <div className="gds-ranker gds-ranker--lg">
            <ul className="gds-ranker__list">
                {theSubBreeds}
            </ul>
            <div className="gds-ranker__connector"></div>
          </div>
          {subBreedImg}
      </div>
    );
  }
}

export default connect(null, { selectSubBreed })(SubBreedMenu);
