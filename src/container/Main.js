import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAllBreeds, selectBreed, selectSubBreed } from '../action/index';
import SelectedBreed from './selectedBreed'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      allBreeds: true,
      selectedBreed: false,
      breeds: this.props.breeds,
      breed: ""
    }
  }

  toggleSelectedBreed = (breedName) => {
    this.setState({
      selectedBreed: !this.state.selectBreed,
      breed: breedName,
    })
    this.props.selectBreed(breedName)
  }

  componentDidMount() {
    this.props.loadAllBreeds();
  }

  render() {
    const listOfBreeds = Object.keys(this.props.breeds);

    const breedItems = listOfBreeds.map((breed, index) =>
      <tr key={index} className="gds-table__row">
        <td key={index}><a onClick={() => this.toggleSelectedBreed(breed)}>{breed}</a></td>
      </tr>
    );

    return (
      <main className="gds-segment">

        {/* The Options - Search Bar & Choose Breed Button  */}
        {/* <button type="button" onClick={this.toggleAllBreeds}>Choose Your Breed</button> */}

        {/* Default view - a table of all breeds grouped by First Letter */}
        {/* when breed is selected, state.allBreeds is false, replace all the page content in main with Selected Breed container */}
        {/* Selected Breed view will have a side nav bar to select another breed; when selected, the side nav bar will clear off side */}

        {(this.state.allBreeds && !this.state.selectedBreed) ?
          <div>
            <div>
              <input placeholder="Search Breed" />
              <h2 className="-text-center">Choose Your Breed</h2>
            </div>
            <div className="gds-table--responsive">
              <table className="gds-table gds-table--sm" data-gds-table="">
                <thead>
                  <tr className="gds-table__row">
                    <th className="gds-table__header" data-gds-table-header="">ALL BREEDS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="gds-table__row">
                    <td># of Breeds: {listOfBreeds.length}</td>
                  </tr>
                  {breedItems}
                </tbody>
              </table>
            </div>
          </div>
        :
          <SelectedBreed
            breeds={this.state.breeds}
            breed={this.state.breed}
          />
        }

      </main>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    breeds: state.breeds,
  });
};

export default connect(mapStatesToProps, { loadAllBreeds, selectBreed, selectSubBreed })(Main);
