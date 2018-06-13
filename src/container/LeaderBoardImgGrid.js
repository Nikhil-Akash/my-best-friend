import React, { Component } from 'react';

class ImgGrid extends Component {

  render() {
    debugger
    const allBreedImg = this.props.breed.map((image, index) =>
      <div key={index}>
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={image} alt="Dog"/>
        <span className="gds-ranker-ensign__number">
          {index}
        </span>
      </div>
    );


    const subBreedImg = this.props.subBreed.map((subBreedImg, index) => <div key={index}>
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={subBreedImg} alt="Dog"/>

          <span className="gds-ranker-ensign__number">
            {index}
          </span>
      </div>);

    return (
      <div className="gds-leaderboard__grid">

          {allBreedImg}
      

      </div>
    );
  }
}

export default ImgGrid;
