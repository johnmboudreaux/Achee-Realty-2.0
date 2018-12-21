import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import onClickOutside from 'react-onclickoutside';
import logo from '../images/achee-logo.svg';
import './Navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShowing: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleMenu() {
    if (!this.state.menuShowing) {
      document.querySelector('.menu-btn').classList.add('close');
      document.querySelector('.menu').style.opacity = 0.9;
      document.querySelector('.menu').style.display = 'block';
      this.setState({ menuShowing: true });
    } else {
      document.querySelector('.menu-btn').classList.remove('close');
      document.querySelector('.menu').style.opacity = 0;
      document.querySelector('.menu').style.display = 'none';
      this.setState({ menuShowing: false });
    }
  }

  handleClickOutside(evt) {
    if (this.state.menuShowing) {
      document.querySelector('.menu-btn').classList.remove('close');
      document.querySelector('.menu').style.opacity = 0;
      document.querySelector('.menu').style.display = 'none';
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
                  <Link to="/AboutMe">ABOUT ME</Link>
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

export default onClickOutside(NavBar);
