import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import NumComponent from './components/NumComponent';
import ColorComponent from './components/ColorComponent';

function App() {

  return (
    <div className="App">
          <h1>Router Practice</h1>
        <Router>
          <HomeComponent path="/home"/>
          <NumComponent path="/:input"/>
          <ColorComponent path="/:input/:textColor/:bkgColor"/>
        </Router>
    </div>
  );
}

export default App;
