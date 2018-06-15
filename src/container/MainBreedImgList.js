import React, { Component } from 'react';

class MainBreedImgList extends Component {

  render() {
    const allBreedImg = this.props.breed.map((image, index) =>
      <div key={index} className="gds-ranker-grid">
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={image} alt="Dog"/>
        <span className="gds-ranker-ensign__number">
          {index+1}
        </span>
      </div>
    );
    return (
      <div className="gds-ranker-grid">
        {allBreedImg}
      </div>
    );
  }
}

export default MainBreedImgList;
