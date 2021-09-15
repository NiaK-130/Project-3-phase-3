import React, {useEffect, useState} from 'react';
export default function Login({login}) {

    const [messages, setMessages] = useState('')

    useEffect(() => {
        fetch("http://localhost:9292/login")
        .then((r) => r.json())
        .then((data) => setMessages(data));
      }, [])

      function handleSubmit(e) {
          e.preventDefault()
          login()
      }

    return (
        <div className="App">
          <img className = "logo-img" src = "./Images/Med-ViewLogo.png" alt = "medview-log"/>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}