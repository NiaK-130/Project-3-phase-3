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
        <div className="appointment-info-box">
            <h3>{appointment.date}</h3>
            <h4>Time: </h4> {appointment.time}
            <h4>Reason for visit: </h4> {appointment.reason_for_visit}
            <h4>Patient name: </h4> {appointment.patient.name}
        </div>
    )
}


