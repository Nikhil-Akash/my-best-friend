import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';

class SelectedBreed extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubBreed: false
    }
  }

  render() {
    const allBreedImg = this.props.breed.map((image, index) => <div key={index}>
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={image} alt="Dog"/>
        <span className="gds-ranker-ensign__number">
          {index}
        </span>
      </div>);


    return (
      <div className="selectedBreed">
        <h1 className="gds-text--header-md -text-center -text-tr-cap">{this.props.breedName}</h1>
        <div className="gds-leaderboard">
            {(this.props.haveSubBreeds.length > 0) ?
              <SubBreedMenu
                breedName={this.props.breedName}
                haveSubBreeds={this.props.haveSubBreeds}
                selectedSubBreed={this.state.selectedSubBreed}
                subBreed={this.props.subBreed}
              />
            :
              null
            }
            <div className="gds-leaderboard__grid">
              {allBreedImg}
            </div>
        </div>
      </div>
    );
  }
}

export default SelectedBreed;
