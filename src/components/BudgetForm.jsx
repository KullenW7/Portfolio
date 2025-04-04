import React, { useState, useEffect } from "react";

const BudgetForm = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [percentages, setPercentages] = useState({
    food: "",
    rent: "",
    transportation: "",
    entertainment: "",
    investments: "",
    savings: "",
  });
  const [amounts, setAmounts] = useState({
    food: "",
    rent: "",
    transportation: "",
    entertainment: "",
    investments: "",
    savings: "",
  });
  const [output, setOutput] = useState(null);

  useEffect(() => {
    // Update dollar amounts whenever percentages or monthly income changes
    if (!monthlyIncome) return;

    const updatedAmounts = {};
    for (const key in percentages) {
      const percentage = parseFloat(percentages[key]);
      if (!isNaN(percentage)) {
        updatedAmounts[key] = (monthlyIncome * (percentage / 100) || 0).toFixed(
          2
        );
      }
    }
    setAmounts(updatedAmounts);
  }, [percentages, monthlyIncome]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalSpent = Object.values(amounts).reduce(
      (acc, val) => acc + parseFloat(val || 0),
      0
    );
    const remaining = (monthlyIncome - totalSpent).toFixed(2);

    setOutput(
      <div>
        <h2>Your Budget Summary</h2>
        {Object.keys(amounts).map((key) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
            <span
              className={
                amounts[key] > percentages[key]
                  ? "over-budget"
                  : "within-budget"
              }
            >
              ${amounts[key]} ({percentages[key]}%)
            </span>
          </p>
        ))}
        <p className="total">
          <strong>Total Spent:</strong> ${totalSpent.toFixed(2)}
        </p>
        <p className="total">
          <strong>Remaining:</strong>{" "}
          <span className={remaining < 0 ? "over-budget" : "within-budget"}>
            ${remaining}
          </span>
        </p>
      </div>
    );
  };

  const handlePercentageChange = (key, value) => {
    setPercentages((prev) => ({ ...prev, [key]: value }));
  };

  const handleIncomeChange = (value) => {
    setMonthlyIncome(parseFloat(value) || "");
  };

  return (
    <div>
      <h1>Monthly Budget Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Monthly Income:
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => handleIncomeChange(e.target.value)}
            required
          />
        </label>
        {Object.keys(percentages).map((key) => (
          <div key={key}>
            <label>
              {key.charAt(0).toUpperCase() + key.slice(1)} (%):
              <input
                type="number"
                min="0"
                max="100"
                value={percentages[key]}
                onChange={(e) => handlePercentageChange(key, e.target.value)}
              />
              <span>{amounts[key] ? ` - $${amounts[key]}` : ""}</span>
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <div>{output}</div>
    </div>
  );
};

export default BudgetForm;
