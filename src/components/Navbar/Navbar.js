import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../images/achee-logo (1).svg';
import './Navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.menuOpen === false) {      
      this.setState({ menuOpen: true });
      document.getElementById('link_menu').style.display = 'block';
      document.getElementById('hamburger_icon').style.display = 'none';
      document.getElementById('cross_icon').style.display = 'block';
    }
    if (this.state.menuOpen === true) {
      this.setState({ menuOpen: false });
      document.getElementById('link_menu').style.display = 'none';
      document.getElementById('hamburger_icon').style.display = 'block';
      document.getElementById('cross_icon').style.display = 'none';
    }
  }

  render() {
    return (
      <div className="navBar-wrapper">
        <header>
          <Row>
            <Col sm={6}>
              <section className="hero-title-a">
                <div>
                  <h2>
                    <span>
                      <img src={logo} alt="fancy a" />
                    </span>
                    <span>
                      CHEE REALTY SERVICES
                    </span>
                  </h2>
                  <h3>“Service Beyond The Sale”</h3>
                  {/* <h4>Gonzales, LA</h4> */}
                </div>
              </section>
            </Col>
            <Col sm={6}>
              <button
                id="hamburger_icon"
                className="hamburger"
                onClick={this.toggleMenu}
              >&#9776;
              </button>
              <button
                id="cross_icon"
                className="cross"
                onClick={this.toggleMenu}
              >&#735;
              </button>
              <div id="link_menu" className="menu">
                <ul>
                  <a href="/AboutMe"><li>ABOUT ME</li></a>
                  <a href="#"><li>CURRENT LISTINGS</li></a>
                  <a href="#"><li>RECENTLY CLOSED</li></a>
                  <a href="#"><li>NEW TO THE MARKET</li></a>
                  <a href="#footer"><li>LETS CHAT</li></a>
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
