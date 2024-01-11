/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
import { login02, loginicon01, loginicon02, loginlogo } from "../../imagepath";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState, useEffect } from "react";
// import { jwtDecode } from 'jwt-decode'

// import { login } from '../../../utils/AuthService'

import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";

const Login = () => {
  // const [user, setUser] = useState({})

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(username, password);
  //     history.push('/admin');
  //   } catch (error) {
  //     console.error('error', error);
  //   }
  // };

  // const handleCallbackResponse = response => {
  //   console.log('TOKEN', response.credential)
  //   const userObject = jwtDecode(response.credential)
  //   console.log('USEROBJECT', userObject);
  //   setUser(userObject)
  // }

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: '537718634857-rtb387t8kvdm3qjd6qi526t922ml7of9.apps.googleusercontent.com',
  //     callback: handleCallbackResponse
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById('signInDiv'),
  //     { size: 'large', type: 'icon', shape: 'square', text: 'signin_with' }
  //   )

  // }, [])

  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  // let inputRef = useRef();
  // const showIcon = () => <i className="feather feather-eye" aria-hidden="true">
  //   <FeatherIcon icon="eye" />
  // </i>;
  // const hideIcon = () => <i className="feather feather-eye-slash" aria-hidden="true">
  //   <FeatherIcon icon="eye-off" />
  // </i>
  return (
    <>

      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img">
                  <img
                    className="img-fluid"
                    src={login02}
                    alt="#"
                  />
                </div>
              </div>
            </div>
            {/* /Login logo */}
            {/* Login Content */}
            <div className="col-lg-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        <Link to="/admin-dashboard">
                          <img src={loginlogo} alt="#" />
                        </Link>
                      </div>
                      <h2>Login</h2>
                      {/* Form */}
                      <form 
                        // onSubmit={onSubmit}
                      >
                        <div className="form-group">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={username}
                            onChange={onChangeUsername}
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Contraseña <span className="login-danger">*</span>
                          </label>
                          <input
                            type={passwordVisible ? 'password' : ''}
                            className="form-control pass-input"
                            value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            onChange={onChangePassword}
                          />
                          <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                          >
                            {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                          </span>
                        </div>
                        <div className="forgotpass">
                          <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              {" "}
                              Recordarme
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <Link to="/forgotpassword">¿Olvidó su contraseña?</Link>
                        </div>

                        {/* <button type='submit'>Login</button> */}

                        <div className="form-group login-btn">
                          <Link to="/admin-dashboard"
                            className="btn btn-primary btn-block"

                          >
                            Login
                          </Link>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          ¿Necesita una cuenta? <Link to="/signup">Registrarse</Link>
                        </p>
                        {/* Social Login */}

                        <div className="social-login">
                          <Link to="#">

                            <div id="signInDiv"></div>
                          </Link>

                        </div>
                        {/* /Social Login */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
