import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';

class TopFive extends Component {
  render() {
    return (
      <div className="gds-leaderboard__topfive">
        {(this.props.haveSubBreeds <= 0) ?
            <p>One of a kind. There are no sub-breeds for this dog.</p>
          :
            <SubBreedMenu
              breedName={this.props.breedName}
              haveSubBreeds={this.props.haveSubBreeds}
            />
          }
      </div>
    );
  }
}

export default TopFive;
