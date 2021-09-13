import React, {useEffect} from 'react';

export default function Nav2() {

    useEffect(() => {
        fetch("http://localhost:9292/nav2")
        .then((r) => r.json())
        .then((data) => console.log(data));
      }, [])

    return (
        <div className="App">
        <h1>Nav2 says hello</h1>
        </div>
    )
}