function Display({ display, error, operation, previousValue }) {
  return (
    <div className="display-container">
      {previousValue !== null && operation && (
        <div className="previous-calculation">
          {previousValue} {operation === "*" ? "×" : operation}
        </div>
      )}
      <div className={`display ${error ? "error" : ""}`}>{display}</div>
    </div>
  );
}

export default Display;
