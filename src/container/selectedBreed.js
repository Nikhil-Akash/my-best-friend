import React, { Component } from 'react';

class SelectedBreed extends Component {

  render() {
    const allImages = this.props.breed.map((image, index) => <img key={index} src={image} alt="test"/> );

    return (
      <div>
        <h1 className="-text-center">{this.props.breedName}</h1>

        <div className="gds-table--responsive">
          <table className="gds-table gds-table--sm" data-gds-table="">
            <thead>
              <tr className="gds-table__row">
                <th className="gds-table__header" data-gds-table-header="">Sub-Breeds</th>
              </tr>
            </thead>
            <tbody>
              <tr className="gds-table__row">
                <td># of Sub-Breeds: </td>
              </tr>

            </tbody>
          </table>
        </div>

        {allImages}

      </div>
    );
  }
}


export default SelectedBreed;
