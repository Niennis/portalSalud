export async function fetchUser(id) {
  const USERS_API = 'https://3674-2800-300-6431-2c00-b8c1-3f6f-914d-bfd3.ngrok-free.app'
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
  const USERS_API = 'https://3674-2800-300-6431-2c00-b8c1-3f6f-914d-bfd3.ngrok-free.app'
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
  const USERS_API = 'https://3674-2800-300-6431-2c00-b8c1-3f6f-914d-bfd3.ngrok-free.app/api/professionals'
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
  const USERS_API = 'https://3674-2800-300-6431-2c00-b8c1-3f6f-914d-bfd3.ngrok-free.app/api/professionals/'
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
