import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './Navbar.css';
import logo from '../images/achee-logo (1).svg';

class NavLinks extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  scrollToBottom() {
    document.querySelector('#footer').scrollIntoView({
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="small-nav">
        <Navbar color="light" expand="md">
          <NavbarBrand>
            <section className="hero-title">
              <div>
                <h2>
                  <span>
                    <img src={logo} alt="fancy a" />
                  </span>CHEE REALTY SERVICES
                </h2>
                <h3>“Service Beyond The Sale”</h3>
              </div>
            </section>
          </NavbarBrand>
          <button href="" className="contact-button" onClick={this.scrollToBottom}>Contact Us</button>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-item">
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavLinks;
