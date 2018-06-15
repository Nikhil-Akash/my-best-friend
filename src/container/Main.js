import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAllBreeds, selectBreed, loadSubBreeds } from '../action/index';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      breedName: "",
    }
  }

  toggleSelectedBreed = (breedName) => {
    this.setState({
      breedName: breedName,
    })
    this.props.selectBreed(breedName)
    this.props.loadSubBreeds(breedName)
    this.props.history.push({
      pathname: `/all_dogs/${breedName}`,
      state: {breedName: breedName}
    })
  }

  componentDidMount() {
    this.props.loadAllBreeds();
  }

  render() {
    const listOfBreeds = Object.keys(this.props.breeds)

    const totalBreeds = listOfBreeds.length

    const breedItems = listOfBreeds.map((breedName, index) =>
      <div key={index} className="gds-card -m-b-0">
        <div className="gds-card__img-container--top gds-card__img-container">
          <img className="gds-card__img" src="./images/sample-1.jpg" alt={breedName} />
        </div>
        <div className="gds-card__block">
            <h4 className="gds-card__title">{breedName}</h4>
            <h2 className="gds-card__hero gds-text--header-md gds-text--hero" onClick={() => this.toggleSelectedBreed(breedName)}>{breedName}</h2>
            <p className="gds-card__text">I have subBreeds</p>
        </div>
      </div>
    );

    return (
      <main>
        <div className="-text-center">
          <h1 className="gds-text--header-lg">All Dog Breeds</h1>
          <p># of Breeds: {totalBreeds}</p>
        </div>
        <div className="gds-grid__container gds-grid__container--fluid-xs-1 gds-grid__container--fluid-sm-2 gds-grid__container--fluid-md-3 gds-grid__container--fluid-lg-4 gds-grid__container--fluid-xl-5">
          {breedItems}
        </div>
      </main>
    )
  }
}

const mapStatesToProps = (state) => {
  return ({
    breeds: state.breeds,
    breed: state.breed,
    subBreeds: state.subBreeds,
    subBreed: state.subBreed
  });
};

export default connect(mapStatesToProps, { loadAllBreeds, selectBreed, loadSubBreeds })(Main);
