import React, {useEffect} from 'react';

export default function Nav1() {

    useEffect(() => {
        fetch("http://localhost:9292/nav1")
        .then((r) => r.json())
        .then((data) => console.log(data));
      }, [])

    return (
        <div className="App">
        <h1>Nav1 says hi</h1>
        </div>
    )
}