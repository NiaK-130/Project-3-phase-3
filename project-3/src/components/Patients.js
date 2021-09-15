import React, {useEffect, useState} from 'react';
import PatientDisplay from "./PatientDisplay"
export default function Patients() {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/patients")
        .then((r) => r.json())
        .then((data) => setPatients(data));
      }, [])
      console.log(patients.map((patient) => patient.doctor))
    return (
        <div className="App">
        {patients.map((patient) => <PatientDisplay patient={patient} key={patient.id} />)}
        </div>
    )
}
