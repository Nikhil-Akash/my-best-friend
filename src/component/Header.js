import React, { Component } from 'react';
import LogoButton from './LogoButton';

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
        <nav className="-m-b-3" data-gds-nav-controls="">
          <ul className="gds-nav-tabs gds-nav-tabs--underline gds-nav-tabs--justified" data-gds-nav="7">
            <li className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline gds-nav-tabs__list-item--active" data-gds-nav-item=""><a className="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="1" data-gds-nav-type="tab" href="/"><LogoButton />My Best Friend</a></li>

            <li className="gds-nav-tabs__list-item gds-nav-tabs__list-item--underline" data-gds-nav-item=""><a className="gds-nav-tabs__link gds-nav-tabs__link--underline" data-gds-nav-button="2" data-gds-nav-type="tab" href="/all_dogs">All Breeds</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
