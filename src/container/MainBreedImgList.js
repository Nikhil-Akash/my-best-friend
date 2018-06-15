import React, { Component } from 'react';
import Modal from './Modal';

class MainBreedImgList extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      image: ""
    }
  }

  toggleModal = (image) => {
    this.setState({
      isOpen: !this.state.isOpen,
      image: image
    });
  }

  render() {
    const allBreedImg = this.props.breed.map((image, index) =>
      <div key={index} className="gds-ranker-grid">
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg" src={image} alt="Dog" onClick={()=>this.toggleModal(image)}/>
        <span className="gds-ranker-ensign__number">
          {index+1}
        </span>
      </div>
    );
    return (
      <div>
        <div className="gds-ranker-grid">
          {allBreedImg}
        </div>
        {!this.state.isOpen ?
            null
          :
          <Modal image={this.state.image} breedName={this.props.breedName}/>
        }
      </div>
    );
  }
}

export default MainBreedImgList;
