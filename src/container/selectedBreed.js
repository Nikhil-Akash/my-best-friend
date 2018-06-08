import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';

class SelectedBreed extends Component {
  constructor(props){
    super(props);
    this.state = {
      breedExists: false,
      selectedSubBreed: false
    }
  }

  render() {

    const allImages = this.props.breed.map((image, index) => <div key={index}>
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={image} alt="Dog"/>

          <span className="gds-ranker-ensign__number">
            {index}
          </span>
      </div>);

    // const allSubBreedImg = this.props.subBreed.map((subBreedImg, index) => <div key={index}>
    //     <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={subBreedImg} alt="Dog"/>
    //
    //       <span className="gds-ranker-ensign__number">
    //         {index}
    //       </span>
    //   </div>);

    return (
      <div className="selectedBreed">
        <h1 className="gds-text--header-md  -text-center -text-tr-cap">{this.props.breedName}</h1>

        {this.state.breedExists ?

          <p>This Breed is a mystery. We do not know what it looks like. If you do, please let us know.</p>

        :
        <div className="gds-leaderboard">
            {(this.props.haveSubBreeds.length > 0) ?
              <SubBreedMenu
                breedName={this.props.breedName}
                haveSubBreeds={this.props.haveSubBreeds}
                selectedSubBreed={this.state.selectedSubBreed}
              />
            :
              null
            }
            <div className="gds-leaderboard__grid">
              {(!this.state.selectedSubBreed ?
                <p>subBreed list here</p>
                // {allSubBreedImg}
              :
                {allImages}
              )}
            </div>
        </div>
        }

      </div>
    );
  }
}

export default SelectedBreed;
