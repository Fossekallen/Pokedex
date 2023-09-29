import { useState } from "react";
let noop = () => {
  //do nothing
};

export const Calculator = () => {
  const [screen, setScreen] = useState("0");
  // let initValue = "0";
  const symbols = ["X", "/", "C", "=", "+", "-"];
  // console.log("console log ran " + screen);
  const buttonClick = (input) => {
    let click = input.target.value;
    console.log(input.target.value);
    if (symbols.includes(click)) {
      handleSymbol(click);
    } else {
      handleNumber(click);
    }
  };

  const handleNumber = (number) => {
    if (screen === "0") {
      setScreen(number);
      console.log(screen);
    } else if (screen !== "0") {
      setScreen(screen + number);
      console.log(screen);
    }
  };

  const [firstNumber, setFirstNumber] = useState(undefined);
  const [operation, setOperation] = useState(undefined);

  const handleSymbol = (symbol) => {
    console.log("handleSymbol", { symbol, firstNumber, operation, screen });
    if (symbol === "C") {
      setScreen("0");
      // } else if (symbol === "˿") {
      //   if (buffer.length === 1) {
      //     buffer = "0";
      //   } else {
      //     buffer = buffer.slice(0, -1);
      //   }
    } else if (
      symbol === "+" ||
      symbol === "-" ||
      symbol === "/" ||
      symbol === "X"
    ) {
      setFirstNumber(parseInt(screen));
      setScreen("0");
      setOperation(symbol);
    } else if (symbol === "=") {
      if (operation === "+") {
        let answer = firstNumber + parseInt(screen);
        setScreen(String(answer));
      } else if (operation === "-") {
        let answer = firstNumber - parseInt(screen);
        setScreen(String(answer));
      } else if (operation === "/") {
        let answer = firstNumber / parseInt(screen);
        setScreen(String(answer));
      } else if (operation === "*") {
        let answer = firstNumber * parseInt(screen);
        setScreen(String(answer));
      }

      //answer has been shown on screen, and now the variables are being reset. "Cleaning up"
      setFirstNumber(undefined);
      setOperation(undefined);
      console.log(screen);
    }
  };
  // function rerender() {
  //   screen.innerText = initValue;
  // }
  return (
    <div className="calcFrame" key="calcFrame">
      <input
        value={screen}
        className="calcScreen"
        key="calcFrame"
        type={"number"}
        onChange={noop}
      ></input>
      <div className="buttonRow" key="buttonRow4">
        <button className="button" value="7" onClick={buttonClick}>
          7
        </button>
        <button className="button" value="8" onClick={buttonClick}>
          8
        </button>
        <button className="button" value="9" onClick={buttonClick}>
          9
        </button>
        <button className="button" value="X" onClick={buttonClick}>
          x
        </button>
      </div>
      <div className="buttonRow" key="buttonRow3">
        <button className="button" value="4" onClick={buttonClick}>
          4
        </button>
        <button className="button" value="5" onClick={buttonClick}>
          5
        </button>
        <button className="button" value="6" onClick={buttonClick}>
          6
        </button>
        <button className="button" value="-" onClick={buttonClick}>
          -
        </button>
      </div>
      <div className="buttonRow" key="buttonRow2">
        <button className="button" value="1" onClick={buttonClick}>
          1
        </button>
        <button className="button" value="2" onClick={buttonClick}>
          2
        </button>
        <button className="button" value="3" onClick={buttonClick}>
          3
        </button>
        <button className="button" value="+" onClick={buttonClick}>
          +
        </button>
      </div>
      <div className="buttonRow" key="buttonRow1">
        <button className="button" value="0" onClick={buttonClick}>
          0
        </button>
        <button className="button" value="." onClick={buttonClick}>
          .
        </button>
        <button className="button" value="=" onClick={buttonClick}>
          =
        </button>
        <button className="button" value="C" onClick={buttonClick}>
          C
        </button>
      </div>
    </div>
  );
};
