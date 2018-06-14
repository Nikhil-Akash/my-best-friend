import React, { Component } from 'react';
import LogoButton from './LogoButton';
import BreedMenu from '../container/breedMenu';
import { NavLink } from 'react-router-dom';

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
        <nav className="-m-b-3">
          <ul className="gds-nav">
            <NavLink
              to="/"
              id="AppLogo"
              ><LogoButton />
            </NavLink>

            <NavLink
              to="/all_dogs"
              id="AppName"
              >My Best Friend
            </NavLink>

            <NavLink
              to="#"
              id="AppName"
              onClick={()=>this.toggleChooseBreed()}
              >All Breeds
            </NavLink>
          </ul>
        </nav>

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
