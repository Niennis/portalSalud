/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import config from "config";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Header from "./components/header";
import Admin_Dashboard from "./components/Dashboard/Admin_Dashboard/Admin_Dashboard";
import Login from "./components/pages/login";

const AppContainer = function (props) {

  return (
    <Router basename= "/">
      <>
        <Route render={(props) => <Header {...props} />} />
        <Routes>

          {/* <Route index element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" component={Admin_Dashboard} />
        </Routes>
        <Route render={(props) => <Footer {...props} />} />
      </>
    </Router>
  );
};

export default AppContainer;
