/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import { TextField } from '@mui/material';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Select from "react-select";
import { DatePickerComponent } from "../Ui_Elements/DatePicker.jsx"

import { useForm, Controller } from 'react-hook-form'
import { createSchedule } from '../../utils/fetchSchedules'


const AddSchedule = () => {
  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm()

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { value: 1, label: "Select Department" },
    { value: 2, label: "Cardiology" },
    { value: 3, label: "Uriology" },
    { value: 4, label: "Radiology" },
  ]);

  const onSubmit = handleSubmit(data => {
    console.log('ENVIADO', data);

  })

  let pseudoEvent = { target: { name: 'area', value: event.value } }

  return (
    <div>
      <Header />
      <Sidebar id='menu-item5' id1='menu-items5' activeClassName='add-shedule' />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="schedule.html">Agenda doctor </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Agregar horario</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Agregar horario</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombre <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                              {...register('name', {
                                required: {
                                  value: true,
                                  message: 'Nombre es requerido'
                                },
                                minLength: {
                                  value: 2,
                                  message: 'Nombre debe tener al menos 2 caracteres'
                                }
                              })}
                            />
                            {
                              errors.name && <span><small>{errors.name.message}</small></span>
                            }
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Área <span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="area"
                              {...register('area', {
                                required: {
                                  value: true,
                                  message: 'Área es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={options}
                                  menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="search-commodity"
                                  components={{
                                    IndicatorSeparator: () => null
                                  }}
                                  styles={{
                                    control: (baseStyles, state) => ({
                                      ...baseStyles,
                                      borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                      boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                      '&:hover': {
                                        borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                      },
                                      borderRadius: '10px',
                                      fontSize: "14px",
                                      minHeight: "45px",
                                    }),
                                    dropdownIndicator: (base, state) => ({
                                      ...base,
                                      transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                      transition: '250ms',
                                      width: '35px',
                                      height: '35px',
                                    }),
                                  }}
                                />
                              )}
                            />
                            {/* <select className="form-control select">
                        <option>Choose Department</option>
                        <option>Cardiology</option>
                        <option>Urology</option>
                        <option>Radiology</option>
                      </select> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Días disponibles <span className="login-danger">*</span>
                            </label>
                           
                            <Controller
                              control={control}
                              name="available_days"
                              {...register('available_days', {
                                required: {
                                  value: true,
                                  message: 'Días es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <DatePickerComponent onChange={onChange}/>
                              )}
                            />
                            {/* <input
                        className="form-control datetimepicker"
                        type="text"
                      /> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              From <span className="login-danger">*</span>
                            </label>

                            <div className="">
                              {/* <input
                          type="text"
                          className="form-control"
                          id="datetimepicker3"
                        />  */}
                              <TextField
                                className="form-control"
                                id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time', {
                                  required: {
                                    value: true,
                                    message: 'Hora inicio es requerido',
                                  }
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              To <span className="login-danger">*</span>
                            </label>

                            <div className="">
                              <TextField
                                className="form-control"
                                id="outlined-controlled"
                                type="time"
                                value={endTime}
                                onChange={(event) => {
                                  setEndTime(event.target.value);
                                }}
                                {...register('end_time', {
                                  required: {
                                    value: true,
                                    message: 'Hora término es requerido',
                                  }
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Notes <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Status <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="form-check-input"
                                />
                                Active
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="form-check-input"
                                />
                                In Active
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            <Link to="/addschedule" >
                              <button
                                className="btn btn-primary submit-form me-2"
                                onClick={onSubmit}
                              >
                                Agregar horario
                              </button>
                            </Link>
                            <button
                              className="btn btn-primary cancel-form"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Tarah Shropshire </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Catherine Manseau </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Domenic Houston </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Buster Wigton </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Rolland Webber </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Tarah Shropshire</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="#">See all messages</Link>
              </div>
            </div>
          </div>
        </div>

      </>


    </div>
  )
}

export default AddSchedule;
