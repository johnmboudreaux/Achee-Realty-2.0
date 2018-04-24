import React, { Component } from 'react';
import { Row, Col, Input, Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Hero} />
      </div>
    );
  }
}

export default App;
