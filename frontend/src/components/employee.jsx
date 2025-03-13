import React, { useState } from "react";

const Employee = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "15px", textAlign: "center", fontSize: "1.5rem" }}>
        <h2>Employee Dashboard</h2>
      </header>

      {/* Sidebar Toggle Button */}
      <div>
  {/* Toggle Button - Always Visible */}
  <button 
    onClick={() => setIsOpen(!isOpen)} 
    style={{ 
      position: "fixed", 
      top: "10px", 
      left: "10px", 
      backgroundColor: "#007bff", 
      color: "#fff", 
      border: "none", 
      padding: "10px", 
      cursor: "pointer",
      zIndex: 1000 
    }}
  >
    ☰
  </button>

  {/* Sidebar - Hidden Fully When Closed */}
  <div 
    style={{ 
      position: "fixed", 
      top: "0", 
      left: isOpen ? "0" : "-100%", 
      width: "200px", 
      height: "100vh", 
      backgroundColor: "#222", 
      color: "#fff", 
      padding: "20px", 
      transition: "left 0.3s ease-in-out",
      zIndex: 999 
    }}
  >
    <h3>Employee Menu</h3>
    <ul style={{ listStyleType: "none", padding: "0" }}>
      <li><button style={buttonStyle}>View Tasks</button></li>
      <li><button style={buttonStyle}>Submit Work</button></li>
      <li><button style={buttonStyle}>Attendance</button></li>
      <li><a href="/logout" style={linkStyle}>Logout</a></li>
    </ul>
  </div>
</div>



      {/* Content */}
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h2>Welcome, Employee!</h2>
        <p>Check your tasks, submit work, and mark attendance.</p>
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

export default Employee;
