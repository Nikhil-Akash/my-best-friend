import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAllBreeds, selectBreed, loadSubBreeds } from '../action/index';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      breedName: "",
      hover: false,
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

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    })
  }

  componentDidMount = () => {
    this.props.loadAllBreeds();
  }

  render() {
    var linkStyle;
    if (this.state.toggleHover) {
      linkStyle = {textColor: 'green'}
    } else {
      linkStyle = {textColor: 'blue'}
    }

    const listOfBreeds = Object.keys(this.props.breeds)

    const totalBreeds = listOfBreeds.length

    const breedItems = listOfBreeds.map((breedName, index) =>
    <div key={index} className="gds-ranker-grid__ensign">
      <div className="gds-ranker-ensign__content">
          <span className="gds-ranker-ensign__title--lg" style={linkStyle}  onClick={()=>this.toggleSelectedBreed(breedName)}  onMouseOver={this.toggleHover}>{breedName}</span>
      </div>
      <span class="gds-ranker-ensign__number gds-ranker-ensign__number--md">{index+1}</span>

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

// <div key={index} className="gds-card -m-b-0">
//   <div className="gds-card__block">
//     <h2 className="gds-card__hero gds-text--header-md gds-text--hero" style={linkStyle} onClick={() => this.toggleSelectedBreed(breedName)}  onMouseOver={this.toggleHover}>{breedName}</h2>
//   </div>
// </div>
// <div className="gds-grid__container gds-grid__container--fluid-xs-1 gds-grid__container--fluid-sm-2 gds-grid__container--fluid-md-3 gds-grid__container--fluid-lg-4 gds-grid__container--fluid-xl-5">
//   {breedItems}
// </div>
