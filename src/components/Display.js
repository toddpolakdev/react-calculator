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
