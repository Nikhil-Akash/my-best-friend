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
      <main>

        <button type="button" id="testButton" className="gds-circular-button -m-r-1 gds-circular-button--lg gds-circular-button--default gds-circular-button--tooltip" data-feedback="Default clicked" data-tooltip="Default" onClick={() => this.toggleChooseBreed()} ><i className="fa fa-paw fa-2x"></i></button>

        {!this.state.chooseBreed ?
          <div className="gds-segment">
            <h1 className="gds-text--header-md -text-tr-up -text-center">All Dogs</h1>
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
