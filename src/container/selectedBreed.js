import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBreed, selectSubBreed } from '../action/index';

class SelectedBreed extends Component {
  constructor(props){
    super(props);
    this.state = {
      breed: this.props.breed
    }
  }

  render() {
    // const allImages = this.props.breed.map((image) => <img src={image} alt="test"/> );

    return (
      <div>

        <h1 className="-text-center">{this.state.breed}</h1>



        {/* Selected Breed screen will have a side nav bar to select another breed; when selected, the side nav bar will clear off side */}

      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    breeds: state.breeds,
  });
};

export default connect(mapStatesToProps, { selectBreed, selectSubBreed })(SelectedBreed);
