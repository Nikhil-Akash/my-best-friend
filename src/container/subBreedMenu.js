import React, { Component } from 'react';

class SubBreedMenu extends Component {

  render() {
    const theSubBreeds = this.props.subBreedList.map((subBreed, index) => <td key={index}>{subBreed}</td>)
    return (
      <div className="gds-table--responsive">
        <table className="gds-table gds-table--sm" data-gds-table="">
          <thead>
            <tr className="gds-table__row">
              <th colSpan="2" className="gds-table__header" data-gds-table-header="">Sub-Breeds</th>
            </tr>
          </thead>
          <tbody>
            <tr className="gds-table__row">
              {theSubBreeds}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default SubBreedMenu;
