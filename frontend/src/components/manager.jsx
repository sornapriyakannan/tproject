import React, { useState } from "react";

const Manager = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "15px", textAlign: "center", fontSize: "1.5rem" }}>
        <h2>Manager Dashboard</h2>
      </header>

      {/* Sidebar Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={{ position: "absolute", top: "15px", left: "15px", fontSize: "20px", background: "none", border: "none", cursor: "pointer" }}>
        ☰
      </button>

      {/* Sidebar */}
      <div style={{ position: "fixed", top: "0", left: isOpen ? "0" : "-200px", width: "200px", height: "100vh", backgroundColor: "#222", color: "#fff", padding: "20px", transition: "left 0.3s ease-in-out" }}>
        <h3>Manager Menu</h3>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li><button style={buttonStyle}>Manage Employees</button></li>
          <li><button style={buttonStyle}>Approve Requests</button></li>
          <li><button style={buttonStyle}>Team Reports</button></li>
          <li><a href="/logout" style={linkStyle}>Logout</a></li>
        </ul>
      </div>

      {/* Content */}
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h2>Welcome, Manager!</h2>
        <p>Approve requests, manage employees, and view reports.</p>
      </div>
    </div>
  );
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  margin: "5px 0",
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "#900",
  marginTop: "10px"
};

export default Manager;
