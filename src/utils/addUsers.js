export async function addUsers(user) {
  const USERS_API = 'https://3674-2800-300-6431-2c00-b8c1-3f6f-914d-bfd3.ngrok-free.app'
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
