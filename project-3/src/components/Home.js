import React, {useEffect} from 'react';

export default function Home() {

    useEffect(() => {
        fetch("http://localhost:9292")
        .then((r) => r.json())
        .then((data) => console.log(data));
      }, [])

    //   function handleSubmit(e) {
    //     e.preventDefault()

    // }

    // return (
    //     <div className="App">
    //     <h1>Logo image</h1>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" placeholder="username" />
    //         <input type="text" placeholder="password" />
    //         <input type="submit" value="Login"/>
    //     </form>
    // </div>
    // )
}