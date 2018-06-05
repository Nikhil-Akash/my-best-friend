import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAllBreeds } from '../action/index';
import BreedMenu from './breedMenu'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      chooseBreed: false,
      selectedBreed: false,
    }
  }

  toggleChooseBreed = () => {
    this.setState({
      chooseBreed: !this.state.chooseBreed,
    })
  }

  componentDidMount() {
    this.props.loadAllBreeds();
  }

  render() {
    return (
      <main className="gds-segment">
        <button type="button" onClick={() => this.toggleChooseBreed()}>Choose A Breed</button>

        {!this.state.chooseBreed ?
          <div className="gds-segment">
            <h1 className="-text-center">All Dogs</h1>
            <p className="-text-center">Gallery of dogs</p>
          </div>
        :
          <BreedMenu
            breeds={this.props.breeds}
            selectedBreed={this.state.selectedBreed}
          />
        }
      </main>
    );
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

export default connect(mapStatesToProps, { loadAllBreeds })(Main);
