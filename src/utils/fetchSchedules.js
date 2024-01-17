import { fetchUsers } from "./fetchUsers"

// const selectDays = obj => {
//   const arr = []
//   if (!arr.includes(obj.dia_semana)) {
//     arr.push(obj.dia_semana)
//   }
//   return arr
// }

const doctorList = arr => arr.filter(item => item['tipo_usuario'] === 'profesional').map(user => user.id)

const filterSchedules = (data, ids) => {
  // console.log(data)
  // console.log(ids)
  let newObj = []
  ids.forEach(item => {
    let newArr = []
    data.forEach(el => {
      // console.log(el['id_profesional'], item);
      if (el['id_profesional'] === item) {

        newArr.push(el)
        // console.log('arr', item, newArr)
      }
    })
    newObj.push(newArr)
  })
  console.log('filterschedules', bleh(newObj));
  bleh(newObj)
  return newObj
}

const bleh = (arr) => {
  let initialValue = []
  arr.forEach(item => {
    let arrDays = []
    item.forEach((otro) => {
      if (!arrDays.includes(otro['dia_semana'])) {
        arrDays.push(otro['dia_semana'])
        // console.log('arrDays', arrDays);
      }
      otro.days = arrDays
    })
  })

  console.log('ARR', arr);
  return initialValue
}

export const fetchSchedules = async () => {
  const doctors = await fetchUsers()
  const docList = doctorList(doctors)
  // console.log('doclist', docList);

  return fetch(process.env.REACT_APP_SCHEDULES_API + '/api/schedules', {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
    .then(data => data.json())
    .then(data => {
      // console.log(data,)
      filterSchedules(data, docList)
      //   docList.map(item => ({
      //     ...item,
      //     availableTime: 
      // }))
      return data
    })
    .catch(err => console.log(err))
  // console.log('HOLA');

  // const data = await fetchData.json()
  // console.log('DATA', data);

  // return data
}

fetchSchedules().then((data) => console.log('data', data))

export const createSchedule = async (url, schedule) => {
  const data = await fetch(url, {
    method: "POST",
    cors: "no-cors",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "usuario_id": schedule.user_id,
      "dia_semana": schedule.day,
      "hora_inicio": schedule.start_time,
      "hora_fin": schedule.end_time
    })
  })

  return data.json()
}

export const fetchSchedule = async (id, url) => {
  const data = await fetch(url + `/${id}`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()

}


export const updateSchedule = async (schedule, id, url) => {
  console.log('SCHEDULE', schedule)

  const data = await fetch(url + `/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "usuario_id": schedule.user_id,
      "dia_semana": schedule.day,
      "hora_inicio": schedule.start_time,
      "hora_fin": schedule.end_time
    })
  })
  return data
}


export const deleteSchedule = async (id, url) => {
  const data = await fetch(url + `/${id}`, {
    method: "DELETE",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}



