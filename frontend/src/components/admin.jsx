import React, { useState } from "react";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "15px", textAlign: "center", fontSize: "1.5rem" }}>
        <h2>Admin Dashboard</h2>
      </header>

      {/* Sidebar Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={{ position: "absolute", top: "15px", left: "15px", fontSize: "20px", background: "none", border: "none", cursor: "pointer" }}>
        ☰
      </button>

      {/* Sidebar */}
      <div style={{ position: "fixed", top: "0", left: isOpen ? "0" : "-200px", width: "200px", height: "100vh", backgroundColor: "#222", color: "#fff", padding: "20px", transition: "left 0.3s ease-in-out" }}>
        <h3>Admin Menu</h3>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li><button style={buttonStyle}>Manage Users</button></li>
          <li><button style={buttonStyle}>View Reports</button></li>
          <li><button style={buttonStyle}>System Settings</button></li>
          <li><a href="/logout" style={linkStyle}>Logout</a></li>
        </ul>
      </div>

      {/* Content */}
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h2>Welcome, Admin!</h2>
        <p>Manage users, view reports, and configure system settings here.</p>
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

export default Admin;
