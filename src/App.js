import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Onboarding } from './components/pages/Onboarding';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Wizard</h1>
      </header>
      <main>
        <Switch>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
