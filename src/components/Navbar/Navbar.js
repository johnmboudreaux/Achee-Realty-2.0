import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
      this.setState({ menuShowing: true });
    } else {
      document.querySelector('.menu-btn').classList.remove('close');
      document.querySelector('.menu').style.opacity = 0;
      this.setState({ menuShowing: false });
    }
  }

  render() {
    return (
      <div className="navBar-wrapper">
        <header>
          <Row>
            <Col className="container-flush"sm={8}>
              <section className="nav-title">
                <div>
                  <Link to="/">
                    <span>
                      <img src={logo} alt="fancy a" />
                    </span>
                    <span>
                      CHEE REALTY SERVICES
                    </span>
                  </Link>
                  <h3>“Service Beyond The Sale”</h3>
                  {/* <h4>Gonzales, LA</h4> */}
                </div>
              </section>
            </Col>
            <Col sm={4}>
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
                  <Link to="/AboutMe/">ABOUT ME</Link>
                  <Link to="/">CURRENT LISTINGS</Link>
                  <Link to="/">RECENTLY CLOSED</Link>
                  <Link to="/">NEW TO THE MARKET</Link>
                  <a href="#footer">LETS CHAT</a>
                  <Link to="/">HOME</Link>
                </ul>
              </div>
            </Col>
          </Row>
        </header>

      </div>
    );
  }
}

export default withRouter(NavBar);
