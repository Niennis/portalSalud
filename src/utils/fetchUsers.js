export async function fetchUsers(url) {
  const data = await fetch( url , {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}

export async function addUsers(user) {
  const USERS_API = 'https://5cad-2800-300-6431-2c00-e51f-908c-ed18-99c2.ngrok-free.app'
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
  const USERS_API = 'https://5cad-2800-300-6431-2c00-e51f-908c-ed18-99c2.ngrok-free.app'
  const data = await fetch( USERS_API + `/api/users/${id}`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}

export async function updateUser(user, id) {
  console.log('EDITUSER', user)
  const USERS_API = 'https://5cad-2800-300-6431-2c00-e51f-908c-ed18-99c2.ngrok-free.app'
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



export async function fetchDoctor(id) {
  const USERS_API = 'https://5cad-2800-300-6431-2c00-e51f-908c-ed18-99c2.ngrok-free.app/api/professionals/'
  const data = await fetch( USERS_API + `${id}`, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}


export async function updateDoctor(user, id) {
  const USERS_API = 'https://5cad-2800-300-6431-2c00-e51f-908c-ed18-99c2.ngrok-free.app/api/professionals/'
  const data = await fetch(USERS_API + `${id}`, {
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

