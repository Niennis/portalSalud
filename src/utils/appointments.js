const formatDate = (date) => {
  const month = date.getMonth()
  const day = date.getDate()
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export async function fetchAppointments(url) {
  const data = await fetch(url, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })

  const response = await data.json()
  console.log('RESPONSE', response);
  response['response'].forEach(element => {
    element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
  });

  return response
}

export async function fetchAppointment(id) {
  const APPOINMENT_API = process.env.REACT_APP_APPOINTMENTS_API + `/api/appointments/${id}`

  const data = await fetch(APPOINMENT_API, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })

  const response = await data.json()
  // response['response'].forEach(element => {
  //   element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
  // });

  return response
}

export async function addAppointment(appointment) {
  const APPOINMENT_API = process.env.REACT_APP_APPOINTMENTS_API

  const body = {
    profesional_id: appointment.doctor.id,
    alumno_id: appointment.patient_id,
    fecha: formatDate(appointment.appointment_date.$d),
    hora: appointment.start_time.concat(':00'),
    estado: "pendiente"
  }
  console.log('BODY', body);

  const data = await fetch(APPOINMENT_API + '/api/appointments', {
    method: "POST",
    cors: "no-cors",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify(body)
  })

  return data.json()
}


export async function updateAppointment(appointment, id) {
  const APPOINTMENT_API = process.env.REACT_APP_APPOINTMENTS_API
  console.log(appointment.appointment_date);


  const body = {
    "profesional_id": appointment.selected_doctor.id,
    "alumno_id": appointment.patient_id,
    "fecha": formatDate(appointment.appointment_date.$d),
    "hora": appointment.start_time,
    "estado": "pendiente"
  }
  console.log('BODY', body);
  const data = await fetch(APPOINTMENT_API + `/api/appointments/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify(body)
  })

  return data
}


export const deleteAppointment = async (id) => {
  const APPOINMENT_API = process.env.REACT_APP_APPOINTMENTS_API
  try {
    await fetch(APPOINMENT_API + `/api/appointments/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      }
    })
  } catch (err) {
    console.log(err)
  }
}

