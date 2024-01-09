export async function fetchAppointments(url) {
  const data = await fetch( url , {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  
  const response = await data.json()
  console.log('RESPONSE' , response);
  response['response'].forEach(element => {
    element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
  });
  
  return response
}