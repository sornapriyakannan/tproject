import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Employee from "./components/employee";
import Admin from "./components/admin";
import Manager from "./components/manager";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
};

export default App;
