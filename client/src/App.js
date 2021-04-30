// Server
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './bootstrap.min.css';

// Style
import './App.scss';

// Pages
import Welcome from './Pages/Welcome/welcome'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
