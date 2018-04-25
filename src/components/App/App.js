import React, { Component } from 'react';
import { Row, Col, Input, Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import SlickSlider from '../Slider/Slider';
import Hero from '../Hero/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        {/* <Route exact path="/" component={Hero} /> */}
        <SlickSlider />
      </div>
    );
  }
}

export default App;
