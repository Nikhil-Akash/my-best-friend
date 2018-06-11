import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1 className="gds-text--header-lg">Welcome to My Best Friend</h1>
      <p className=" -text-center ">put picture of a dog here</p>
      <Link to={`/all_dogs`}><button type="button" id="allDogsButton" className="gds-button--default">All Dogs</button></Link>
    </div>
  );
}

export default WelcomePage;
