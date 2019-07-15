import React, { Component }  from 'react';
import './Resources/css/App.css';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Home from './Component/Home';
import Report from './Component/Report';
import Invoice from './Component/Invoice';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar></NavBar>
      <div className="Body">
        <Header></Header>
      
      <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/report' component={Report} />
              <Route path='/invoice' component={Invoice} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
