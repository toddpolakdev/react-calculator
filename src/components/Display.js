import React from "react";

function Display({ display, result }) {
  console.log("display", display);
  console.log("result", result);
  return (
    <div className="">
      {/* <div className="display">{display}</div> */}
      <div className="result">
        {result ? `${display} = ${result}` : display && `${display}`}
      </div>
    </div>
  );
}

export default Display;
