import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import './App.css';
import React, {useState} from 'react';
import Nav1 from "./components/Nav1"
import Nav2 from "./components/Nav2"
import Login from "./components/Login"

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
      <NavLink className="nav-bar" to="/nav1">nav1</NavLink>
      <NavLink className="nav-bar" to="/nav2">nav2</NavLink>
    </nav> 
      <Switch>
        <Route path="/nav1">
          <Nav1 />
        </Route>
        <Route path="/nav2">
          <Nav2 />
        </Route>
        <Route exact path ="*"><h1 className="page-not-found">404 Page Not Found :(</h1></Route>
      </Switch>
      </Router>  </div> : <Login login={login}/>}

      </div>
  );
}

export default App;
