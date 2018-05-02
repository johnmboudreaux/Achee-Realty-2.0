import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import CurrentListings from '../CurrentListings/CurrentListings';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Hero} />
        {/* <Hero /> */}
        {/* <CurrentListings /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
