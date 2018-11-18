import React, { Component } from 'react';

import Home from './Pages/Home';
import Blog from './Pages/Blog';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// class App extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       foo: 'bar',
//       resumeData: {}
//     };
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path='/' component={Home}/>
// {/*          <Route exact path='/blog' component={Blog}/>*/}
//         </div>
//       </Router>
//     );
//   }
// }

const App = () => (
  <Router>
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route path='/blog' component={Blog} />
    </div>
  </Router>
);

export default App;
