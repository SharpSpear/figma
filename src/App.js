import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
