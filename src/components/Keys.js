import React from "react";

function Keys(props) {
  return (
    <div className="keys">
      <div className="numbers">
        <button name="7" onClick={props.handleClick}>
          7
        </button>
        <button name="8" onClick={props.handleClick}>
          8
        </button>
        <button name="9" onClick={props.handleClick}>
          9
        </button>

        <button name="4" onClick={props.handleClick}>
          4
        </button>
        <button name="5" onClick={props.handleClick}>
          5
        </button>
        <button name="6" onClick={props.handleClick}>
          6
        </button>

        <button name="1" onClick={props.handleClick}>
          1
        </button>
        <button name="2" onClick={props.handleClick}>
          2
        </button>
        <button name="3" onClick={props.handleClick}>
          3
        </button>

        <button className="zero" name="0" onClick={props.handleClick}>
          0
        </button>
        <button name="." onClick={props.handleClick}>
          .
        </button>

        <button name="clear" onClick={props.handleClick} className="clear">
          Clear
        </button>
        <button
          name="backspace"
          onClick={props.handleClick}
          className="backspace">
          Backspace
        </button>
      </div>

      <div className="symbols">
        <button className="button-sign" name="*" onClick={props.handleClick}>
          x
        </button>
        <button className="button-sign" name="/" onClick={props.handleClick}>
          /
        </button>

        <button className="button-sign" name="-" onClick={props.handleClick}>
          -
        </button>

        <button className="button-sign" name="+" onClick={props.handleClick}>
          +
        </button>
        <button className="button-sign" name="=" onClick={props.handleClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default Keys;
