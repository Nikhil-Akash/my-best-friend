import React, { Component } from 'react';
import TopFive from './LeaderBoardTopFive';
import ImgGrid from './LeaderBoardImgGrid';

class SelectedBreed extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubBreed: false
    }
  }

  render() {
    return (
      <div className="selectedBreed">
          <h1 className="gds-text--header-md -text-center -text-tr-cap">{this.props.breedName}</h1>
            <div className="gds-leaderboard">
              <TopFive
                breedName={this.props.breedName}
                haveSubBreeds={this.props.haveSubBreeds}
              />
              <ImgGrid
                breed={this.props.breed}
                selectedSubBreed={this.state.selectedSubBreed}
                subBreed={this.props.subBreed}
              />
            </div>
      </div>
    );
  }
}

export default SelectedBreed;
