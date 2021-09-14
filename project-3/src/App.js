import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import './App.css';
import Nav1 from "./components/Nav1"
import Nav2 from "./components/Nav2"
import Home from "./components/Home"

function handleSubmit(e) {
  e.preventDefault()

}

function App() {
  
  return (
    
    <Router >
      <div>
        {/* <nav className="App nav-bar">
          <NavLink className="nav-bar" to="/">Home</NavLink>
          <NavLink className="nav-bar" to="/nav1">nav1</NavLink>
          <NavLink className="nav-bar" to="/nav2">nav2</NavLink>
        </nav> */}

        <img src = "./project-3/public/Med-ViewLogo.png" alt = "Medview-logo"/>

      <Switch>
      <Route exact path="/">
        <Link to = "/home">
        <div className = "MDview-logo-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <input type="submit" value="Login"/>
        </form>

    )
              </div>


        </Link>
          
        </Route>
        
        <Route path="/nav1">
          <Nav1 />
        </Route>
        <Route path="/nav2">
          <Nav2 />
        </Route>
        <Route path ="*"><h1 className="page-not-found">404 Page Not Found :(</h1></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
