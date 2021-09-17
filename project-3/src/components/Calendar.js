import React, {useEffect, useState} from 'react';

import AppointmentDisplay from "./AppointmentDisplay"
export default function Calendar() {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/appointments")
        .then((r) => r.json())
        .then((data) => setAppointments(data))
      }, [])
    // console.log(appointments.map((patientAppts) => patientAppts.forEach((appt) => appt.date)))
    // console.log(patients.map((patient) => patient.appointments))
    return (
        <div className="App">
        <h1 className = "upcoming-appointments-text" >Upcoming appointments:</h1>
        {appointments.map((appointment) =>  <AppointmentDisplay key={appointment.id} appointment={appointment}/>)}
        </div>
    )
}