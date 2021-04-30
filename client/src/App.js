// Server
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './bootstrap.min.css';
import Navigation from './Components/Navigation';

// Style
import './App.scss';

// Pages
import TaskManager from './Pages/Welcome/TaskManager'

function App() {
  return (
    <>
    <Navigation/>
    <Router>
      <Switch>
        <Route exact path="/" component={TaskManager} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
