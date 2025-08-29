import { useState } from "react";
import Display from "../components/Display";
import Keys from "../components/Keys";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [error, setError] = useState(false);

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
    setError(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
    setError(false);
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setError(false);
  };

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
    setError(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      if (newValue === null) {
        setError(true);
        setDisplay("Error");
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
        return;
      }

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "*":
        return firstValue * secondValue;
      case "/":
        if (secondValue === 0) {
          return null; // Division by zero
        }
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleClick = (e) => {
    const { name } = e.target;

    if (error && name !== "clear") {
      return; // Don't allow input when there's an error except clear
    }

    switch (name) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        inputNumber(name);
        break;
      case ".":
        inputDecimal();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        performOperation(name);
        break;
      case "clear":
        clear();
        break;
      case "backspace":
        backspace();
        break;
      default:
        break;
    }
  };

  // Format display for long numbers
  const formatDisplay = (value) => {
    if (value === "Error") return value;

    const num = parseFloat(value);
    if (isNaN(num)) return value;

    // Handle very large or very small numbers
    if (Math.abs(num) > 999999999 || (Math.abs(num) < 0.000001 && num !== 0)) {
      return num.toExponential(6);
    }

    // Limit decimal places for display
    return parseFloat(num.toFixed(8)).toString();
  };

  return (
    <div className="calculator">
      <Display
        display={formatDisplay(display)}
        error={error}
        operation={operation}
        previousValue={previousValue}
      />
      <Keys handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
