import './App.css';

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import { HomePage } from './page/HomePage';
import PrivateRuote from './page/PrivateRuote';



function App() {

  return (
    <Router>

      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <PrivateRuote>
          <HomePage />
        </PrivateRuote>
      </Switch >
    </Router>
  );
}

export default App;
