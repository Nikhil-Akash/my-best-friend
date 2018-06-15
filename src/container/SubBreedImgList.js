import React, { Component } from 'react';

class SubBreedImgList extends Component {
  render() {
    const subBreedImg = this.props.subBreed.map((subBreedImg, index) =>
      <div key={index} className="gds-ranker-grid">
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg sub-breed-images" src={subBreedImg} alt="Dog"/>
        <span className="gds-ranker-ensign__number">{index+1}</span>
      </div>);

    return (
      <div className="gds-ranker-grid">
        {subBreedImg}
      </div>
    );
  }
}

export default SubBreedImgList;
