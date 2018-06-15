import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="-text-center">
      <h1 className="gds-text--header-lg">Welcome to My Best Friend</h1>
      <div>
        <img src="../images/dogs.jpg" alt="Grid of Dogs by FreePik" height="400" width="400"/>
      </div>
      <Link to={`/all_dogs`}><button type="button" id="allDogsButton" className="gds-button--lg gds-button--success">See All Dogs</button></Link>
    </div>
  );
}

export default WelcomePage;
