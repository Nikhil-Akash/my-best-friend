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

  componentDidMount = () => {
    this.props.loadAllBreeds();
  }

  render() {

    const listOfBreeds = Object.keys(this.props.breeds)

    const totalBreeds = listOfBreeds.length

    const breedItems = listOfBreeds.map((breedName, index) =>
    <div key={index} className="gds-ranker-grid__ensign">
      <div className="gds-ranker-ensign__content" onClick={()=>this.toggleSelectedBreed(breedName)}>
        <span className="gds-ranker-ensign__title--lg" onClick={()=>this.toggleSelectedBreed(breedName)}>{breedName}</span>
      </div>
      <span className="gds-ranker-ensign__number gds-ranker-ensign__number--md">{index+1}</span>
    </div>
    );



    return (
      <main>
        <div className="-text-center">
          <h1 className="gds-text--header-xl">All Dog Breeds</h1>
          <p className="gds-text--header-sm gds-text--bold">Choose A Breed</p>
          <p className="gds-text--header-xs"># of Breeds: {totalBreeds}</p>
        </div>
        <div className="gds-ranker-grid">
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
    subBreed: state.subBreed,
    randomBreedCollection: state.randomBreedCollection
  });
};

export default connect(mapStatesToProps, { loadAllBreeds, selectBreed, loadSubBreeds })(Main);
