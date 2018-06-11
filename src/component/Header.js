import React, { Component } from 'react';
import LogoButton from './LogoButton';
import AllBreeds from './AllBreeds';
import BreedMenu from '../container/breedMenu';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      chooseBreed: false,
    }
  }

  toggleChooseBreed = () => {
    this.setState({
      chooseBreed: !this.state.chooseBreed,
    })
  }
  render() {
    return (
      <header>
        <LogoButton />
        <AllBreeds toggleChooseBreed={this.toggleChooseBreed} />

        {!this.state.chooseBreed ?
          null
        :
          <BreedMenu />
        }

      </header>
    );
  }

}

export default Header;

// <header className="-color-bg-pri -text-center">
//   <h1 className="gds-text--header-lg">My Best Friend</h1>
// </header>
