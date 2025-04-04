import React from "react";
import Calculator from "../components/Calculator";
import "../styles/calculator.css"; // Ensure this path matches your project structure

const CalculatorPage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">React Calculator</h2>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
