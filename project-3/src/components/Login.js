
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
          </div >
          <div className = "login-input-container">
            <h2 className = "welcome-text">Welcome to Medview</h2>
            <form onSubmit={handleSubmit}>
                <input className = "username-enter-box" type="text" placeholder="username" value={username} onChange={handleUsernameChange}/>
                <input className = "password-enter-box" type="text" placeholder="password" value={password} onChange={handlePasswordChange}/>
                <input className = "login-button" type="submit" value="Sign In"/>
            </form>
            </div>
            <div>
            <h4 className = "mid-text"> If you no longer have an active account and would like your records, please call the Medview Center (897) 703-4960. </h4>
            </div>
            <div className = "footer-text-container">
            <h5 className = "footer-text">Terms & Conditions   |    Privacy Policy    |    Notice of Privacy Practices    |    Consents  </h5>
            <img className = "footer-img" src = "./Images/Footer-img-login.png" alt = "login-footer"/>
            </div>
        </div>
    )
}

