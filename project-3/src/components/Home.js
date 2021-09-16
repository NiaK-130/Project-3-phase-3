
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
            <div className = "App-main">
                <img src = "" alt = ""/>
                <h1 className = "welcome-text-home">Welcome {currentUser.name}</h1>
                    <div className = "info-box">
                        <p>Medical specialty: {currentUser.specialty}</p>
                        <p classname = "location-home"> Location: </p>
                        <p> Ph: </p>
                        <p> Been in practice for: </p>
                    </div>
            </div>
                <div className = "reminders-block">
                    <h2>Reminders:</h2>
                </div>

                <div className = "answers-insights-block">
                    <h3>My Answers and Insights have: </h3>
                </div>

            <button className = "sign-out-button" onClick={handleClick}>Sign Out</button>
            
          
        </div>
       
    )
}