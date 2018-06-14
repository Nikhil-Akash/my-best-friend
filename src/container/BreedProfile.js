import React, { Component } from 'react';
import SubBreedMenu from './subBreedMenu';
import MainBreedImgList from './MainBreedImgList';
import SubBreedImgList from './SubBreedImgList';

class BreedProfile extends Component {

  render() {
    return (
      <div>
        <div>
          {(this.props.haveSubBreeds <= 0) ?
              <h4 className="-text-center">One of a kind. There are no sub-breeds for this dog.</h4>
            :
              <SubBreedMenu
                breedName={this.props.breedName}
                haveSubBreeds={this.props.haveSubBreeds}
                subBreed={this.props.subBreed}
                selectedSubBreed={this.props.selectedSubBreed}
              />
          }
        </div>
        <div>
          {(this.props.haveSubBreeds <= 0) ?
            <MainBreedImgList
              breed={this.props.breed}
            />
          :
            <SubBreedImgList  subBreed={this.props.subBreed}
            />
          }
        </div>
      </div>
    );
  }
}

export default BreedProfile
