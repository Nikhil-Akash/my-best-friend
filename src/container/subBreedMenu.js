import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubBreed } from '../action/index';

class SubBreedMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSubBreed: false
    }
  }

  toggleSelectSubBreed = (breedName, index) => {
    this.setState({
      selectedSubBreed: !this.state.selectedSubBreed
    })

    this.props.selectSubBreed(breedName)
  }

  render() {
    debugger;
    const theSubBreeds = this.props.subBreedList.map((subBreed, index) => <td key={index} onClick={()=>this.toggleSelectSubBreed(index)}>{subBreed}</td>)

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


export default connect(null, { selectSubBreed })(SubBreedMenu);
