import './App.css';

import { Router } from '@reach/router';
import Main from './components/Main';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <div className ="Title">STARWARS api</div>
      <Router>
        <Main path = "/" />
        <People path = "/people/:id" />
        <Planets path = "/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
