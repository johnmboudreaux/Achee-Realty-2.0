import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Hero} />
        <Route exact path="/api/v1/search" component={SearchResults} />
        <Footer />
      </div>
    );
  }
}

export default App;
