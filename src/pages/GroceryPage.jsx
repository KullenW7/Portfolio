import React from "react";
import { Link } from "react-router-dom";
import GroceryList from "../components/GroceryList/GroceryList";
import styles from "../components/GroceryList/grocery.module.css"; // ✅ Import CSS module
import groceryBackground from "../assets/grocery-preview.jpg"; // ✅ Import the image

export default function GroceryPage() {
  return (
    <div
      className={styles.groceryBackground} // ✅ Apply CSS module class
      style={{ backgroundImage: `url(${groceryBackground})` }} // ✅ Set background image dynamically
    >
      {/* ✅ Add Navigation Links */}
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>
          🏠 Portfolio Home
        </Link>
        <Link to="/about" style={linkStyles}>
          About
        </Link>
        <Link to="/projects" style={linkStyles}>
          Projects
        </Link>
        <Link to="/contact" style={linkStyles}>
          Contact
        </Link>
      </nav>

      {/* Grocery List Component */}
      <h1 className={styles.title}>Grocery List</h1>
      <GroceryList />
    </div>
  );
}

/* ✅ Add basic styles for navigation */
const navStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  background: "#333",
  padding: "10px",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};
