import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom"
import './App.css';
import React, {useState, useEffect} from 'react';
import Patients from "./components/Patients"
import Calendar from "./components/Calendar"
import Login from "./components/Login"
import Home from "./components/Home"

function App() {

  const [doctors, setDoctors] = useState([])

  const [currentUser, setCurrentUser] = useState('')

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/login")
    .then((r) => r.json())
    .then((data) => setDoctors(data));
  }, [currentUser])

  console.log(doctors.map((doctor) => doctor.current_user))
  
  function login(id) {
    setLoggedIn(!loggedIn)
    fetch(`http://localhost:9292/doctors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        current_user: true,
      }),
    })
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
  }

  function logout(id) {
    setLoggedIn(!loggedIn)
    fetch(`http://localhost:9292/doctors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        current_user: false,
      }),
    })
      .then((r) => r.json())
      .then((data) => setCurrentUser(''));
  }

  return (
    <div>
    {loggedIn ?
    <div>
      <Router>
        <nav className="App nav-bar">
          <NavLink className="nav-bar" to="/">Home</NavLink>
          <NavLink className="nav-bar" to="/patients">Patients</NavLink>
          <NavLink className="nav-bar" to="/calendar">Calendar</NavLink>
        </nav> 
        <Switch>
          <Route exact path="/patients">
            <Patients patients={currentUser.patients} currentUser={currentUser}/>
          </Route>
          <Route exact path="/calendar">
            <Calendar patients={currentUser.patients}/>
          </Route>
          <Route exact path="/">
            <Home currentUser={currentUser} logout={logout}/>
          </Route>
        </Switch> 
      </Router>  
    </div> : 
    <div>
      <Router>
        <Route exact path="/">
          <Login login={login} doctors={doctors}/>
          
        </Route>
      </Router>
    </div>
    } 

      </div>
  );
}

export default App;