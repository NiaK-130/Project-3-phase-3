
import PatientDisplay from "./PatientDisplay"

export default function Patients({patients}) {

    return (
        <div className="App">
            <h1>Your patients:</h1>
            {patients.map((patient) => <PatientDisplay patient={patient} key={patient.id} />)}
        </div>
    )
}