import React, { Component } from 'react';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import LifeBattery from './Pages/LifeBattery';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/blog' component={Blog} />
      <Route path='/lifebattery' component={LifeBattery} />
    </div>
  </Router>
);

export default App;
