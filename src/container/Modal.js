import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="gds-modal__overlay gds-modal--shown" data-element="modal-example">
        <div className="gds-modal gds-layout__column--md-12">
            <form className="gds-modal__form">
              <div className="gds-modal__header">
                <h2 className="gds-modal__title gds-text--header-sm">{this.props.breedName}</h2>
                <button className="gds-modal__close-button" data-toggle="modal"></button>
              </div>
                <div className="gds-modal__body">
                  <img src={this.props.image} alt="Dog"/>
                </div>
            </form>
        </div>
    </div>
    );
  }
}

export default Modal;
