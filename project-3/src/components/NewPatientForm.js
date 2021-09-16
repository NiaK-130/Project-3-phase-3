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
             <input type="text" placeholder="name" value={patientName} onChange={(e) => setPatientName(e.target.value)}/>
             <input type="text" placeholder="medical history" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)}/>
             <label for="insured">Insured</label>
             <input type="checkbox" id="insured" name="insured" onChange={handleChange}/>
             <input type="text" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
             <input type="submit" name="submit" value="submit"/>
        </form>
    )
}