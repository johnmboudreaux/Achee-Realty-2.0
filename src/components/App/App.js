import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/api/v1/search" component={SearchResults} />
        <Footer />
      </div>
    );
  }
}

export default App;
