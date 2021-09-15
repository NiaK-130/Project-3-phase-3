import {useEffect} from 'react'
export default function PatientDisplay({patient, deletePatient}) {

    function handleClick() {
        deletePatient(patient.id)
    }

    return (
        <div className="div-class">
            <h2>{patient.name}</h2>
            <p>Medical History: {patient.medical_history}</p>
            <p>Insured: {patient.insured ? "true" : "false"}</p>
            <p>Age: {patient.age}</p>
            <button onClick={handleClick}>Remove Patient</button>
        </div>
    )
}