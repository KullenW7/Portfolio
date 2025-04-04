import React from "react";

const Header = () => (
  <header
    className="text-white text-center py-5"
    style={{
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      color: "#fff",
      minHeight: "160px",
      maxHeight: "190px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <h1
      style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}
    >
      Kullen Weaver
    </h1>
    <p style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
      Web Developer & Designer
    </p>
    <p style={{ fontSize: "1rem", opacity: 0.85 }}>
      Showcasing My Work and Experience
    </p>
  </header>
);

export default Header;
