import React from 'react'
export default function PatientDisplay({patient}) {
    return (
        <div>
            <h2>{patient.name}</h2>
            <p>Medical History: {patient.medical_history}</p>
            <p>Insured: {patient.insured ? "true" : "false"}</p>
            <p>Age: {patient.age}</p>
            <p>Doctor: {patient.doctor.name}</p>
        </div>
    )
}