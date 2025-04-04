import React, { useState } from "react";

import { Button } from "./button";
import { Card, CardContent } from "./card";
//import "../styles/calculator.css"; // ✅ Correct path

export default function Calculator() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState(null);

  const handleNumberClick = (num) => {
    setInput(input === "0" ? num.toString() : input + num);
  };

  const handleOperatorClick = (op) => {
    setPreviousInput(input);
    setOperator(op);
    setInput("0");
  };

  const handleEqualClick = () => {
    if (!operator || previousInput === null) return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(input);
    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }

    setInput(result.toString());
    setOperator(null);
    setPreviousInput(null);
  };

  const handleClear = () => {
    setInput("0");
    setOperator(null);
    setPreviousInput(null);
  };

  return (
    <div className="calculator-container">
      {" "}
      {/* ✅ Scoped Class */}
      <Card className="calculator-card">
        <CardContent>
          <div className="input-display">{input}</div>
          <div className="button-grid">
            <div className="button-row">
              <Button onClick={handleClear} className="clear-btn">
                C
              </Button>
              <Button
                onClick={() =>
                  setInput((prev) =>
                    prev.startsWith("-") ? prev.substring(1) : "-" + prev
                  )
                }
                className="sign-btn"
              >
                +/-
              </Button>
              <Button
                onClick={() => handleOperatorClick("/")}
                className="operator-btn"
              >
                /
              </Button>
            </div>
            <div className="button-row">
              <Button
                onClick={() => handleNumberClick(7)}
                className="number-btn"
              >
                7
              </Button>
              <Button
                onClick={() => handleNumberClick(8)}
                className="number-btn"
              >
                8
              </Button>
              <Button
                onClick={() => handleNumberClick(9)}
                className="number-btn"
              >
                9
              </Button>
              <Button
                onClick={() => handleOperatorClick("*")}
                className="operator-btn"
              >
                *
              </Button>
            </div>
            <div className="button-row">
              <Button
                onClick={() => handleNumberClick(4)}
                className="number-btn"
              >
                4
              </Button>
              <Button
                onClick={() => handleNumberClick(5)}
                className="number-btn"
              >
                5
              </Button>
              <Button
                onClick={() => handleNumberClick(6)}
                className="number-btn"
              >
                6
              </Button>
              <Button
                onClick={() => handleOperatorClick("-")}
                className="operator-btn"
              >
                -
              </Button>
            </div>
            <div className="button-row">
              <Button
                onClick={() => handleNumberClick(1)}
                className="number-btn"
              >
                1
              </Button>
              <Button
                onClick={() => handleNumberClick(2)}
                className="number-btn"
              >
                2
              </Button>
              <Button
                onClick={() => handleNumberClick(3)}
                className="number-btn"
              >
                3
              </Button>
              <Button
                onClick={() => handleOperatorClick("+")}
                className="Operator-btn"
              >
                +
              </Button>
            </div>
            <div className="button-row">
              <Button
                onClick={() => handleNumberClick(0)}
                className="zero-btn number-btn"
              >
                0
              </Button>
              <Button onClick={handleEqualClick} className="equal-btn">
                =
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
