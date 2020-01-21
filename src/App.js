import React from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
import StudentCatalog from './components/StudentCatalog';
import CreateStudent from './components/CreateStudent';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentInfo from './components/StudentInfo';

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
          <Route path='/student/'>
            <StudentInfo/>
          </Route>
          <Route exact path='/add_student'>
            <CreateStudent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
