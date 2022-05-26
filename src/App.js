import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Employee from './container/Employee/Employee';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <Switch>
                      <Home />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
