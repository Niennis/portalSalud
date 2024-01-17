import { fetchUser } from './fetchUsers'

const formatDate = (date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export const fetchAppointments = async (url) => {
  try {
    const data = await fetch(url, {
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      }
    })
    const response = await data.json()
    return response
  } catch (err) {
    console.log(err)
  }
}

export const fetchAppointment = async (id) => {
  const APPOINMENT_API = process.env.REACT_APP_APPOINTMENTS_API + `/api/appointments/${id}`

  const data = await fetch(APPOINMENT_API, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  const response = await data.json()
  return response
}

export const addAppointment = async (appointment) => {
  const APPOINMENT_API = process.env.REACT_APP_APPOINTMENTS_API

  const body = {
    profesional_id: appointment.doctor.id,
    alumno_id: appointment.patient_id,
    fecha: formatDate(appointment.appointment_date.$d),
    hora: appointment.start_time.concat(':00'),
    estado: "pendiente"
  }
  try {
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
  } catch (err) {
    console.log(err)
  }
}

export const updateAppointment = async (appointment, id) => {
  const APPOINTMENT_API = process.env.REACT_APP_APPOINTMENTS_API

  const body = {
    "profesional_id": appointment.selected_doctor.id,
    "alumno_id": appointment.patient_id,
    "fecha": formatDate(appointment.appointment_date.$d),
    "hora": appointment.start_time,
    "estado": "pendiente"
  }
  try {
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
  } catch (err) {
    console.log('ERROR', err)
  }
}

export const changeStatusAppointment = async (id, status) => {
  const APPOINMENT_API = process.env.REACT_APP_APPOINTMENTS_API
  try {
    await fetch(APPOINMENT_API + `/api/appointments/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify({
        "estado": status
      })
    })
  } catch (err) {
    console.log(err)
  }
}

export const fetchData = async (callback) => {
  try {
    const data = await fetch(process.env.REACT_APP_APPOINTMENTS_API + '/api/appintsimple')
    const response = await data.json()
    response.forEach(element => {
      element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
    });

    const obj = response.map(async date => {
      const fetchDoctor = await fetchUser(date.id_professional)
      const fetchPatient = await fetchUser(date.id_patient)
      return {
        ...date,
        nombre_alumno: fetchPatient.nombre + ' ' + fetchPatient.apellido,
        nombre_profesional: fetchDoctor.nombre + ' ' + fetchDoctor.apellido,
        telefono_alumno: fetchPatient.telefono,
        mail_alumno: fetchPatient.email,
        genero_alumno: fetchPatient.genero
      }
    })
    return Promise.all(obj).then(resp => callback(resp))
  } catch (err) {
    console.log(err)
  }
}

export const fetchDataDate = async (id) => {
  try {
    const data = await fetch(process.env.REACT_APP_APPOINTMENTS_API + `/api/appintsimple/${id}`)
    const response = await data.json()
    const fetchDoctor = await fetchUser(response.id_professional)
    const fetchPatient = await fetchUser(response.id_patient)
    return {
      ...response,
      nombre_alumno: fetchPatient.nombre,
      apellido_alumno: fetchPatient.apellido,
      nombre_profesional: fetchDoctor.nombre + ' ' + fetchDoctor.apellido,
      telefono_alumno: fetchPatient.telefono,
      mail_alumno: fetchPatient.email,
    }
  } catch (err) {
    console.log(err)
  }
}

export const search = (data, query) => data.filter(obj => JSON.stringify(obj).toLowerCase().includes(query.toLowerCase()))