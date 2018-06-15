// import React from 'react';
// import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRandomBreed } from '../action/index';

class WelcomePage extends Component {
  componentDidMount() {
    this.props.loadRandomBreed();
  }

  render(){
    return (
      <div className="-text-center">
        <h1 className="gds-text--header-lg">Welcome to My Best Friend</h1>
        <div>
          <img src={this.props.randomBreed} alt="Random Dog"/>
        </div>
        <Link to={`/all_dogs`}><button type="button" id="allDogsButton" className="gds-button--lg gds-button--success">See All Dogs</button></Link>
      </div>
    );
  }

}

const mapStatesToProps = (state) => {
  return ({
    randomBreed: state.randomBreed
  });
};

export default connect(mapStatesToProps, { loadRandomBreed })(WelcomePage);
