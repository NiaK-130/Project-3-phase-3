
import React, {useState} from 'react';
export default function Login({login, doctors}) {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={username} onChange={handleUsernameChange}/>
                <input type="text" placeholder="password" value={password} onChange={handlePasswordChange}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}