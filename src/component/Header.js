import React, { Component } from 'react';
import LogoButton from './LogoButton';
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
              to="#"
              id="AppName"
              >My Best Friend
            </NavLink>

            <NavLink
              to="/all_dogs"
              id="AppName"
              >All Breeds
            </NavLink>
          </ul>
        </nav>
      </header>
    );
  }

}

export default Header;
