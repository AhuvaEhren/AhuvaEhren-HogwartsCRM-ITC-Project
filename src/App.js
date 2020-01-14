import React from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
// import StudentCatalog from './components/OLD-StudentCatalog';
import StudentCatalog from './components/StudentCatalog';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavBar></SideNavBar>
        <Switch>
          <Route exact path='/'>
            <StudentCatalog/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;