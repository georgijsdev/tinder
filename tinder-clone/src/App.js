import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h2>Chat page</h2>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
