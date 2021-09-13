import React, {useEffect} from 'react';

export default function Home() {

    useEffect(() => {
        fetch("http://localhost:9292")
        .then((r) => r.json())
        .then((data) => console.log(data));
      }, [])

    return (
        <div className="App">
        <h1>Welcome home</h1>
        </div>
    )
}