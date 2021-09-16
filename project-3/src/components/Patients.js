import {useEffect, useState} from 'react'
import NewPatientForm from "./NewPatientForm"
import PatientDisplay from "./PatientDisplay"
export default function Patients({currentUser}) {

    const [form, openCloseForm] = useState(false)
    const [patients, setPatients] = useState([])

    function handleClick(e) {
        e.preventDefault()
        openCloseForm(!form)
    }

    function deletePatient(id) {
        fetch(`http://localhost:9292/patients/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(data => setPatients(data));
    }

    function addPatient(patientName, medicalHistory, insured, age, currentUser) {

        fetch("http://localhost:9292/patients", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: `${patientName}`,
              medical_history: `${medicalHistory}`,
              insured: `${insured}`,
              age: `${age}`,
              doctor_id: `${currentUser.id}`
            }),
          })
            .then((r) => r.json())
            .then(data => setPatients([...patients, data]));
    }

    useEffect(() => {
        fetch("http://localhost:9292/patients")
        .then((r) => r.json())
        .then((data) => setPatients(data));
      }, [currentUser])

    return (
        <div className="App">
            <h1>Your patients:</h1>
            <button onClick={handleClick}>Add Patient</button>
            {form ? <NewPatientForm addPatient={addPatient} currentUser={currentUser} /> : ''}
            {patients.map((patient) => <PatientDisplay deletePatient={deletePatient} patient={patient} key={patient.id} />)}
        </div>
    )
}
