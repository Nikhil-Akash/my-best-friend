import React, { Component } from 'react';
import Modal from './Modal';

class SubBreedImgList extends Component {
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
    const subBreedImg = this.props.subBreed.map((subBreedImg, index) =>
      <div key={index} className="gds-ranker-grid">
        <img key={index} className="gds-ranker-ensign__thumbnail gds-ranker-ensign__thumbnail--lg sub-breed-images" src={subBreedImg} alt="Dog" onClick={()=>this.toggleModal(subBreedImg)}/>
        <span className="gds-ranker-ensign__number">{index+1}</span>
      </div>);

    return (
      <div>
        <div className="gds-ranker-grid">
          {subBreedImg}
        </div>
        {!this.state.isOpen ?
            null
          :
          <Modal image={this.state.image} breedName={this.props.subBreedName}/>
        }
      </div>
    );
  }
}

export default SubBreedImgList;
