import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import './App.css';
import React, {useState} from 'react';
import Patients from "./components/Patients"
import Nav2 from "./components/Nav2"
import Login from "./components/Login"
import Home from "./components/Home"


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  function login() {
    setLoggedIn(!loggedIn)
  }
  return (
    <div>
    {loggedIn ?
    <div>
    <Router>
    <nav className="App nav-bar">
      <NavLink className="nav-bar" to="/">Home</NavLink>
      <NavLink className="nav-bar" to="/patients">Patients</NavLink>
      <NavLink className="nav-bar" to="/nav2">nav2</NavLink>
    </nav>
      <Switch>
        <Route exact path="/patients">
          <Patients />
        </Route>
        <Route exact path="/nav2">
          <Nav2 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </Router>  </div> : <Login login={login}/>}
      </div>
  );
}

export default App;