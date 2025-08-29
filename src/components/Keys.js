function Keys({ handleClick }) {
  return (
    <div className="keys">
      {/* Row 1: Clear and Backspace */}
      <button name="clear" onClick={handleClick} className="clear">
        Clear
      </button>
      <button name="backspace" onClick={handleClick} className="backspace">
        ⌫
      </button>

      {/* Row 2: 7, 8, 9, / */}
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="/" onClick={handleClick}>
        ÷
      </button>

      {/* Row 3: 4, 5, 6, * */}
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="*" onClick={handleClick}>
        ×
      </button>

      {/* Row 4: 1, 2, 3, - */}
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="-" onClick={handleClick}>
        −
      </button>

      {/* Row 5: 0 (spans 2), ., + */}
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button name="." onClick={handleClick}>
        .
      </button>
      <button name="+" onClick={handleClick}>
        +
      </button>

      {/* Row 6: = (spans full width) */}
      <button name="=" onClick={handleClick} style={{ gridColumn: "span 4" }}>
        =
      </button>
    </div>
  );
}

export default Keys;
