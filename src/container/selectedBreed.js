import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';

class SelectedBreed extends Component {

  render() {

    const allImages = this.props.breed.map((image, index) => <div>
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={image} alt="Dog"/>

          <span className="gds-ranker-ensign__number">
            {index}
          </span>
      </div>);

    return (
      <div className="selectedBreed">
        <h1 className="gds-text--header-md  -text-center -text-tr-cap">{this.props.breedName}</h1>

        {this.props.selectedSubBreed ?

          <p>This Breed is a mystery. We do not know what it looks like. If you do, please let us know.</p>

        :
        <div className="gds-leaderboard">
            {(this.props.subBreedList.length > 0) ?
              <SubBreedMenu
                breedName={this.props.breedName}
                subBreedList={this.props.subBreedList}
              />
            :
              null
            }
            <div className="gds-leaderboard__grid">
              {allImages}
            </div>
        </div>

        }

      </div>
    );
  }
}

export default SelectedBreed;
