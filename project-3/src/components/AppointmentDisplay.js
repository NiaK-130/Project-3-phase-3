import {useEffect, useState} from 'react'
export default function AppointmentDisplay({appointment}) {

    // console.log(appointment.patient)
    // const [appointments, setAppointments] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:9292/appointments")
//     .then((r) => r.json())
//     .then((data) => setAppointments(data));
//   }, [])

//   console.log(appointments)

    return (
        <div className="div-class">
            <h2>{appointment.date}</h2>
            <p>Time: {appointment.time}</p>
            <p>Reason for visit: {appointment.reason_for_visit}</p>
            <p>Patient name: {appointment.patient.name}</p>
        </div>
    )
}