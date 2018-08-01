import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

// import Search from '../Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/Search" component={Search} /> */}
      </div>
    );
  }
}

export default App;
