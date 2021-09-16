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
                <h1 className = "welcome-text-home">Welcome Dr. {currentUser.name}</h1>
                <img src={currentUser.image_link} alt="doctor image"/>
                    <div className = "info-box">
                        <p>Medical specialty: {currentUser.specialty}</p>
                        <p className = "location-home"> Location: {currentUser.location}</p>
                        <p> Ph: {currentUser.phone_number}</p>
                        <p> Been in practice for: {currentUser.been_in_practice_for} years</p>
                    </div>
            </div>
                <div className = "reminders-block">
                    <h2>Reminders:</h2>
                    <p>{currentUser.reminders}</p>
                </div>

                <div className = "answers-insights-block">
                    <h3>Awards:</h3>
                    <p>{currentUser.awards}</p>
                </div>

            <button className = "sign-out-button" onClick={handleClick}>Sign Out</button>
            
          
        </div>
       
    )
}