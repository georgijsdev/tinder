import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Header, TinderCards} from './components';

function App() {
  return (
    <div>
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
