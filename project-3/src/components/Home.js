
export default function Home({currentUser, logout}) {

    // useEffect(() => {
    //     fetch("http://localhost:9292")
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   }, [])

    function handleClick() {
        logout(currentUser.id)
    }

    return (
        <div className="App">
        <h1>Welcome, {currentUser.name}</h1>
        <h2>Your info:</h2>
            <p>Medical specialty: {currentUser.specialty}</p>
            <p>id: {currentUser.id}</p>
            <p>Username: {currentUser.username}</p>
            <p>Password: {currentUser.password}</p>
        <button onClick={handleClick}>Logout</button>
        </div>
    )
}