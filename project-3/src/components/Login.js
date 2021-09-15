
import React, {useState} from 'react';
export default function Login({login, doctors}) {

    const [username, setUserName] = useState('drcole123')
    const [password, setPassword] = useState('password1')

      function handleSubmit(e) {
          e.preventDefault()
          doctors.forEach((doc) => { 
              if ((doc.username === username) && (doc.password === password)) {
                login(doc.id)
              } else if ((doc.username !== username) && (doc.password !== password)){
                  console.log("incorrect username or password")
              }
          })
      }

      function handleUsernameChange(e) {
        e.preventDefault()
        setUserName(e.target.value)
      }

      function handlePasswordChange(e) {
        e.preventDefault()
        setPassword(e.target.value)
      }

    return (
        <div className="App">
            <div className = "logo-img-container">
            <img className = "logo-img" src = "./Images/Med-ViewLogo.png" alt = "med-view-logo"/>
          </div>
            <form onSubmit={handleSubmit}>
                <input className = "username-enter-box" type="text" placeholder="username" value={username} onChange={handleUsernameChange}/>
                <input className = "password-enter-box" type="text" placeholder="password" value={password} onChange={handlePasswordChange}/>
                <input className = "login-button" type="submit" value="Login"/>
            </form>
        </div>
    )
}