
export default function Home({currentUser}) {

    // useEffect(() => {
    //     fetch("http://localhost:9292")
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   }, [])

    return (
        <div className="App">
        <h1>Welcome, {currentUser.name}</h1>
        <h2>Your info:</h2>
            <p>Medical specialty: {currentUser.specialty}</p>
            <p>id: {currentUser.id}</p>
            <p>Username: {currentUser.username}</p>
            <p>Password: {currentUser.password}</p>
        </div>
    )
}