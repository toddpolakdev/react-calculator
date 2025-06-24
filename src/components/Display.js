import React from "react";

function Display({ display, error, operation, previousValue }) {
  return (
    <div className="display-container">
      {/* Previous calculation display */}
      {previousValue !== null && operation && (
        <div className="previous-calculation">
          {previousValue} {operation === "*" ? "×" : operation}
        </div>
      )}

      {/* Main display */}
      <div className={`display ${error ? "error" : ""}`}>{display}</div>
    </div>
  );
}

export default Display;

// import React from "react";

// function Display({ display, result }) {
//   console.log("display", display);
//   console.log("result", result);
//   return (
//     <div className="">
//       {/* <div className="display">{display}</div> */}
//       <div className="result">
//         {result ? `${display} = ${result}` : display && `${display}`}
//       </div>
//     </div>
//   );
// }

// export default Display;
