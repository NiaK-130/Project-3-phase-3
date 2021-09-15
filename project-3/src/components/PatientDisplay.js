import {useEffect} from 'react'
export default function PatientDisplay({patient}) {

    // useEffect(() => {
    //     fetch("http://localhost:9292/patients")
    //     .then((r) => r.json())
    //     .then((data) => console.log(data));
    //   }, [])

    return (
        <div className="div-class">
            <h2>{patient.name}</h2>
            <p>Medical History: {patient.medical_history}</p>
            <p>Insured: {patient.insured ? "true" : "false"}</p>
            <p>Age: {patient.age}</p>
        </div>
    )
}