import {useState} from 'react'

export default function NewPatientForm({currentUser, addPatient}) {

    const [patientName, setPatientName] = useState('')
    const [medicalHistory, setMedicalHistory] = useState('')  
    const [insured, setInsured] = useState(false)
    const [age, setAge] = useState('')
    console.log(currentUser.id)

    function handleSubmit(e) {
        e.preventDefault()

        console.log('hello')
        console.log(patientName)

        addPatient(patientName, medicalHistory, insured, age, currentUser)

        // fetch("http://localhost:9292/patients", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       name: patientName,
        //       medical_history: medicalHistory,
        //       insured: insured,
        //       age: age,
        //       doctor_id: currentUser.id
        //     }),
        //   })
        //     .then((r) => r.json())
        //     .then(data => console.log(data));
    }

    function handleChange(e) {
        e.preventDefault()
        setInsured(!insured)
    }

    return (
        <form onSubmit={handleSubmit}>
             <input className = "name-input" type="text" placeholder="Add Full Name" value={patientName} onChange={(e) => setPatientName(e.target.value)}/>
             <input className = "medical-history-input" type="text" placeholder="Provide Medical History" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)}/>
             <input className = "age-input" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
             <h3 className = "insured-text">
             <label className = "insured-input" for="insured">Are they Insured? </label>
             </h3>
             <div className = "checkbox-div">
             <input className = "checkbox-input" type="checkbox" id="insured" name="insured" onChange={handleChange}/>
             </div>
             <input className = "submit-input" type="submit" name="submit" value="Submit"/>
        </form>
    )
}