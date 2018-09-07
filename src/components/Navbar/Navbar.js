import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../images/achee-logo.svg';
import './Navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShowing: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuShowing) {
      document.querySelector('.menu-btn').classList.add('close');
      document.querySelector('.menu').style.opacity = 0.9;

      this.state.menuShowing = true;
    } else {
      document.querySelector('.menu-btn').classList.remove('close');
      document.querySelector('.menu').style.opacity = 0;

      this.state.menuShowing = false;
    }
  }

  render() {
    return (
      <div className="navBar-wrapper">
        <header>
          <Row>
            <Col className="container-flush"sm={6}>
              <section className="nav-title">
                <div>
                  <a href="/">
                    <span>
                      <img src={logo} alt="fancy a" />
                    </span>
                    <span>
                      CHEE REALTY SERVICES
                    </span>
                  </a>
                  <h3>“Service Beyond The Sale”</h3>
                  {/* <h4>Gonzales, LA</h4> */}
                </div>
              </section>
            </Col>
            <Col sm={6}>
              <div
                onClick={this.toggleMenu}
                onKeyPress={this.toggleMenu}
                className="menu-btn"
                role="button"
                tabIndex={0}
              >
                <div className="btn-line" />
                <div className="btn-line" />
                <div className="btn-line" />
              </div>
              <div id="link_menu" className="menu">
                <ul>
                  <a href="/AboutMe"><li>ABOUT ME</li></a>
                  <a href="#"><li>CURRENT LISTINGS</li></a>
                  <a href="#"><li>RECENTLY CLOSED</li></a>
                  <a href="#"><li>NEW TO THE MARKET</li></a>
                  <a href="#footer"><li>LETS CHAT</li></a>
                  <a href="/"><li>HOME</li></a>
                </ul>
              </div>
            </Col>
          </Row>
        </header>

      </div>
    );
  }
}

export default NavBar;
