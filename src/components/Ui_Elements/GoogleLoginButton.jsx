import { loginicon01 } from '../imagepath';

const navigate = url => {
  window.location.href = url
}

const auth = async () => {
  const response = await fetch('http://localhost:3010', {
    method: 'post'
  })
  const data = await response.json()
  navigate(data.url)
}

export const GoogleLoginButton = () => {
  return (
    <>
      <img src={loginicon01} alt="#" onClick={() => auth()} />
    </>
  )
}