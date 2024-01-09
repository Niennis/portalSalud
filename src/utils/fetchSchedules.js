import { fetchUsers } from "./fetchUsers"

// const selectDays = obj => {
//   const arr = []
//   if (!arr.includes(obj.dia_semana)) {
//     arr.push(obj.dia_semana)
//   }
//   return arr
// }

const doctorList = arr => arr.map(user => user.id)

export const fetchSchedules = async(url) => {
  const doctors = await fetchUsers(process.env.REACT_APP_SCHEDULES_API + '/api/schedules')

  const docList = doctorList(doctors)
  console.log('doclist', docList);
  const fetchData = await fetch(url, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })

  const data = await fetchData.json()

  return data
}

export const createSchedule = async (url, schedule) =>  {
  const data = await fetch(url, {
    method: "POST",
    cors: "no-cors",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "usuario_id" : schedule.user_id,
      "dia_semana": schedule.day,
      "hora_inicio": schedule.start_time,
      "hora_fin": schedule.end_time
    })
  })

  return data.json()
}

export const fetchSchedule = async (id, url) => {
  const data = await fetch( url + `/${id}`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}


export const updateSchedule = async(schedule, id, url) => {
  console.log('SCHEDULE', schedule)

  const data = await fetch(url + `/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "usuario_id" : schedule.user_id,
      "dia_semana": schedule.day,
      "hora_inicio": schedule.start_time,
      "hora_fin": schedule.end_time
    })
  })
  return data
}


export const deleteSchedule = async (id, url) => {
  const data = await fetch( url + `/${id}`, {
    method: "DELETE",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}
