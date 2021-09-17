import {useEffect} from 'react'
export default function PatientDisplay({patient, deletePatient}) {

    function handleClick() {
        deletePatient(patient.id)
    }

    return (
        <div className="patient-info-box">
            <h2>{patient.name}</h2>
            <h4>Medical History: </h4> {patient.medical_history}
            <h4>Insured: </h4> {patient.insured ? "Yes" : "No"}
            <h4>Age: </h4> {patient.age} 
            <div className = "remove-patient-button-container"> 
            <button className = "remove-patient-button"onClick={handleClick}>Remove Patient</button>
            </div> 
        </div>
    )
}