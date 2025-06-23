import React, { useState } from "react";
import Display from "../components/Display";
import Keys from "../components/Keys";

const Calculator = () => {
  const [equation, setEquation] = useState(null);
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [invalidEntry, setInvalidEntry] = useState(false);
  const [equals, setEquals] = useState(false);
  const [operand, setOperand] = useState(false);
  const [num, setNum] = useState(false);

  console.log("invalidEntry", invalidEntry);

  const handleClick = (e, type) => {
    const key = e.target.name;
    console.log("key", key);

    let displayKey = key;
    if (displayKey === "*") displayKey = "x";

    switch (key) {
      case "=":
        calculate();
        break;
      case "clear":
        // this.setState({ equation: "", display: "", result: "" });
        break;
      case "backspace":
        // this.setState((prevState) => ({
        //   equation: prevState.equation.slice(0, -1),
        //   display: prevState.display.slice(0, -1),
        //   result: "",
        // }));
        break;
      default:
        setEquation((prevEquation) => {
          // Only update the equation if it's not null
          return prevEquation === null ? key : prevEquation + key;
        });
        setDisplay((prevDisplay) => {
          return prevDisplay === null ? displayKey : prevDisplay + displayKey;
        });
      // this.setState((prevState) => ({
      //   equation: (prevState.equation += key),
      // }));
      // this.setState((prevState) => ({
      //   display: (prevState.display += displayKey),
      // }));
    }
  };

  const calculate = () => {
    setInvalidEntry(false);
    console.log("equation", equation);
    try {
      // eslint-disable-next-line
      console.log("eval equation", eval(equation));
      // eslint-disable-next-line
      setResult(eval(equation));
    } catch (error) {
      setInvalidEntry(true);
      // setResult("Invalid Entry");
    }
  };

  return (
    <div className="calculator">
      <Display display={display} result={result} />
      <Keys handleClick={handleClick} />
    </div>
  );
};

// class Calculator extends Component {
//   constructor() {
//     super();
//     this.state = {
//       equation: "",
//       display: "",
//       result: "",
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   calculate = () => {
//     try {
//       this.setState({
//         // eslint-disable-next-line
//         result: eval(this.state.equation),
//       });
//     } catch (error) {
//       this.setState({
//         result: "Invalid Entry",
//       });
//     }
//   };

//   handleClick = (event) => {
//     let key = event.target.name;
//     console.log("key", key);

//     let displayKey = event.target.name;

//     console.log("displayKey", displayKey);

//     if (displayKey === "*") displayKey = "x";

//     switch (key) {
//       case "=":
//         this.calculate();
//         break;
//       case "clear":
//         this.setState({ equation: "", display: "", result: "" });
//         break;
//       case "backspace":
//         this.setState((prevState) => ({
//           equation: prevState.equation.slice(0, -1),
//           display: prevState.display.slice(0, -1),
//           result: "",
//         }));
//         break;
//       default:
//         this.setState((prevState) => ({
//           equation: (prevState.equation += key),
//         }));
//         this.setState((prevState) => ({
//           display: (prevState.display += displayKey),
//         }));
//     }
//   };

//   render() {
//     console.log("this.state.equation", this.state.equation);
//     return (
//       <div className="calculator">
//         <Display display={this.state.display} result={this.state.result} />
//         <Keys handleClick={this.handleClick} />
//       </div>
//     );
//   }
// }

export default Calculator;
