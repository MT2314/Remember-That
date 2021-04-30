// Server
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './bootstrap.min.css';
import Navigation from './Components/Navigation';

// Style
import './App.scss';

// Pages
import Welcome from './Pages/Welcome/Welcome'

function App() {
  return (
    <>
    <Navigation/>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
