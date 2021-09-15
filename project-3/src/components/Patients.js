import {useEffect, useState} from 'react'

import PatientDisplay from "./PatientDisplay"

export default function Patients() {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/patients")
        .then((r) => r.json())
        .then((data) => setPatients(data));
      }, [])

    return (
        <div className="App">
            <h1>Your patients:</h1>
            {patients.map((patient) => <PatientDisplay patient={patient} key={patient.id} />)}
        </div>
    )
}