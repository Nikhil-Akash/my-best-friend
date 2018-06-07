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
        <h1 className="gds-text--header-md  -text-center">{this.props.breedName}</h1>

        {(this.props.subBreedList.length > 0) ?
          <SubBreedMenu
            breedName={this.props.breedName}
            subBreedList={this.props.subBreedList}
          />
        :
          null
        }

        {this.props.selectedSubBreed ?

          <p>hello</p>

        :
        <div class="gds-leaderboard">
            <div class="gds-leaderboard__topfive">
                <div class="gds-ranker gds-ranker--lg">
                    <ul class="gds-ranker__list">
                        <li class="gds-ranker__item">
                            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                                <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                            </div>
                            <div class="gds-ranker__item-number gds-ranker__item-number--secondary">1<span class="gds-ranker__item-number-ordinal">th</span></div>
                        </li>
                        <li class="gds-ranker__item">
                            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                                <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                            </div>
                            <div class="gds-ranker__item-number gds-ranker__item-number--secondary">2<span class="gds-ranker__item-number-ordinal">th</span></div>
                        </li>
                        <li class="gds-ranker__item">
                            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                                <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                            </div>
                            <div class="gds-ranker__item-number gds-ranker__item-number--secondary">3<span class="gds-ranker__item-number-ordinal">th</span></div>
                        </li>
                        <li class="gds-ranker__item">
                            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                                <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                            </div>
                            <div class="gds-ranker__item-number gds-ranker__item-number--secondary">4<span class="gds-ranker__item-number-ordinal">th</span></div>
                        </li>
                        <li class="gds-ranker__item">
                            <div class="gds-ranker__item-icon" data-tooltip="Brand Name goes here">
                                <img class="gds-ranker__image" src="https://assets.ggops.com/images/ken.png" />
                            </div>
                            <div class="gds-ranker__item-number gds-ranker__item-number--secondary">5<span class="gds-ranker__item-number-ordinal">th</span></div>
                        </li>
                    </ul>
                    <div class="gds-ranker__connector"></div>
                </div>
            </div>
            <div class="gds-leaderboard__grid">
              {allImages}
            </div>
        </div>

        }

      </div>
    );
  }
}

export default SelectedBreed;
