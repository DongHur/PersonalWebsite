import React, { Component } from 'react';

import Home from './Pages/Home';
import Blog from './Pages/Blog';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/blog' component={Blog} />
    </div>
  </Router>
);

export default App;
