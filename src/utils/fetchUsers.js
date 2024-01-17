export async function fetchUsers() {
  const USERS_API = process.env.REACT_APP_USERS_API 

  const data = await fetch( USERS_API + `/api/users`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}

export async function addUsers(user) {
  const USERS_API = process.env.REACT_APP_USERS_API
  const data = await fetch(USERS_API + '/api/users', {
    method: "POST",
    cors: "no-cors",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "nombre": user.name,
      "apellido": user.lastName,
      "telefono": user.mobile,
      "email": user.email,
      "contrasena": user.password,
      "fecha_nacimiento": user.date,
      "genero": user.male === 'on' ? 'masculino' : 'femenino',
      "tipo_usuario": 'alumno'
    })
  })

  return data.json()
}


export async function fetchUser(id) {
  const USERS_API = process.env.REACT_APP_USERS_API
  const data = await fetch( USERS_API + `/api/users/${id}`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  const response = data.json()
  return response
}

export async function updateUser(user, id) {
  console.log('EDITUSER', user)
  const USERS_API = process.env.REACT_APP_USERS_API
  const data = await fetch(USERS_API + `/api/users/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "nombre": user.name,
      "apellido": user.lastName,
      "telefono": user.mobile,
      "email": user.email,
      "contrasena": user.password,
      "fecha_nacimiento": user.date,
      "genero": user.male === "on" ? 'masculino' : 'femenino' || 'otro',
      "tipo_usuario": user.tipo_usuario
    })
  })

  return data
}

export async function fetchDoctors() {
  const USERS_API = process.env.REACT_APP_USERS_API 

  const data = await fetch( USERS_API + `/api/professionals`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}


export async function fetchDoctor(id) {
  const USERS_API = process.env.REACT_APP_USERS_API
  const data = await fetch( USERS_API + `/api/professionals/${id}`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}


export async function addDoctor(user) {
  const USERS_API = process.env.REACT_APP_USERS_API
  const data = await fetch(USERS_API + '/api/professionals', {
    method: "POST",
    cors: "no-cors",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "nombre": user.name,
      "apellido": user.lastName,
      "telefono": user.mobile,
      "email": user.email,
      "contrasena": user.password,
      "fecha_nacimiento": user.date,
      "genero": user.male === 'on' ? 'masculino' : 'femenino',
      "especialidad": user.speciality,
      "tipo_usuario": 'profesional'
    })
  })

  return data.json()
}


export async function updateDoctor(user, id) {
  const USERS_API = process.env.REACT_APP_USERS_API
  const data = await fetch(USERS_API + `/api/professionals/${id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "nombre": user.name,
      "apellido": user.lastName,
      "telefono": user.mobile,
      "email": user.email,
      "contrasena": user.password,
      "fecha_nacimiento": user.date,
      "genero": user.male === "on" ? 'masculino' : user.female === 'on' ? 'femenino' : 'otro',
      "tipo_usuario": user.tipo_usuario,
      "especialidad": user.specialization
    })
  })

  return data
}

