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
        <div className="App-home">
            <div className = "App-main">
                <div className="welcome-header">
                <h1 className = "welcome-text-home">Welcome Dr. {currentUser.name}</h1>
                </div>
                <img className = "dr-image" src={currentUser.image_link} alt="doctor image"/>
                    <div className = "info-box">
                        <h3>Medical specialty: </h3> {currentUser.specialty}
                        <h3 className = "location-home"> Location: </h3> {currentUser.location}
                        <h4> Been in practice for: {currentUser.been_in_practice_for} years</h4>
                        <p> Ph: {currentUser.phone_number}</p>
                        
                    </div>
            </div>
                <div className = "reminders-block">
                    <h2>Reminders:</h2>
                    <p>{currentUser.reminders}</p>
                </div>

                <div className = "awards-block">
                    <h4>Awards:</h4>
                    <p>{currentUser.awards}</p>
                </div>

            <button className = "sign-out-button" onClick={handleClick}>Sign Out</button>
            
          
        </div>
       
    )
}