import { useState } from "react";
import "../styles/games.css";
import jordan from "../../assets/jordan.png";
import leo from "../../assets/leo-trener1.png";

function calculate(firstNumber, secondNumber, mathLevel) {
  if (mathLevel === "level1") {
    return firstNumber + secondNumber;
  } else if (mathLevel === "level2") {
    return firstNumber - secondNumber;
  } else if (mathLevel === "level3") {
    return firstNumber * secondNumber;
  }
  throw new Error("unknown math error");
}

export const MathGames = (props) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [guess, setGuess] = useState(0);
  const mathLevel = props.selectMathProblem;
  const [submittedAnswer, setSubmittedAnswer] = useState(undefined);

  const answer = calculate(firstNumber, secondNumber, mathLevel);

  function levelOneMath() {
    const min = 1;
    const max = 20;
    const firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let secondRandomNumber = firstRandomNumber;

    while (secondRandomNumber === firstRandomNumber) {
      secondRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //ikke bruk set, men return
    setFirstNumber(firstRandomNumber);
    setSecondNumber(secondRandomNumber);
  }

  function levelTwoMath() {
    const min = 10;
    const max = 40;
    const firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let secondRandomNumber = firstRandomNumber;

    while (secondRandomNumber === firstRandomNumber) {
      secondRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    setFirstNumber(firstRandomNumber);
    setSecondNumber(secondRandomNumber);
  }

  function levelThreeMath() {
    const min = 1;
    const max = 10;
    const firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let secondRandomNumber = firstRandomNumber;

    while (secondRandomNumber === firstRandomNumber) {
      secondRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setFirstNumber(firstRandomNumber);
    setSecondNumber(secondRandomNumber);
  }

  const handleClick = () => {
    if (mathLevel === "level1") {
      levelOneMath();
    } else if (mathLevel === "level2") {
      levelTwoMath();
    } else if (mathLevel === "level3") {
      levelThreeMath();
    }
  };

  function onGuess(e) {
    const value = e.target.value;
    const parsedValue = Number.parseInt(value);
    setGuess(parsedValue);
  }

  function onSubmitGuess() {
    console.log("trykket på svar knapp", { guess, answer });
    setSubmittedAnswer(guess);
  }

  const culculationFeedback = () => {
    if (submittedAnswer === answer) {
      return (
        <img className="feedbackImage" src={jordan} width={40} height={40} />
      );
    } else {
      return <img className="feedbackImage" src={leo} width={40} height={40} />;
    }
  };

  return (
    <div>
      {mathLevel === "level1" && (
        <div>
          <h1
            className={`game-header ${guess === 0 ? "red" : "blue"}`}
            style={{
              backgroundColor: guess === 0 ? "red" : "blue",
            }}
          >
            Nivå 1
          </h1>
          <div className="calculation">
            <button
              className="mathButton"
              onClick={() => {
                handleClick();
              }}
            >
              Lag Mattestykke
            </button>
            <label className="mathNumbers">{firstNumber}</label>{" "}
            <div className="asterisk">+</div>{" "}
            <label className="mathNumbers">{secondNumber}</label>
            <div className="asterisk">=</div>{" "}
            <input
              className="input-box"
              type="number"
              onChange={onGuess}
            ></input>
            <button className="mathButton" onClick={onSubmitGuess}>
              Send Svar
            </button>
            <div className="asterisk">{answer}</div>{" "}
            <div className="asterisk">{guess}</div>{" "}
          </div>
        </div>
      )}

      {mathLevel === "level2" && (
        <div>
          <h1 className="game-header">Nivå 2</h1>
          <div className="calculation">
            <button className="mathButton" onClick={handleClick}>
              Lag Mattestykke
            </button>
            <div className="calculation">
              <label className="mathNumbers">{firstNumber}</label>{" "}
              <div className="asterisk">-</div>{" "}
              <label className="mathNumbers">{secondNumber}</label>
              <div className="asterisk">=</div>{" "}
              <input
                className="input-box"
                type="number"
                onClick={onGuess}
              ></input>
              <button className="mathButton" onClick={onSubmitGuess}>
                Send Svar
              </button>
              <div className="asterisk">{answer}</div>{" "}
              <div className="asterisk">{guess}</div>{" "}
            </div>
          </div>
        </div>
      )}

      {mathLevel === "level3" && (
        <div>
          <h1 className="game-header">Nivå 3</h1>
          <div className="calculation">
            <button className="mathButton" onClick={handleClick}>
              Lag Mattestykke
            </button>
            <div className="calculation">
              <label className="mathNumbers">{firstNumber}</label>{" "}
              <div className="asterisk">*</div>{" "}
              <label className="mathNumbers">{secondNumber}</label>
              <div className="asterisk">=</div>{" "}
              <input
                className="input-box"
                type="number"
                onClick={onGuess}
              ></input>
              <button className="mathButton" onClick={onSubmitGuess}>
                Send Svar
              </button>
            </div>
          </div>
          <div className="mathAnswerGraphic">
            <div className="asterisk">
              {answer} <p>Is the answer</p>
            </div>{" "}
            <div className="asterisk">
              {guess}
              <p>Is the guess</p>{" "}
            </div>{" "}
            {culculationFeedback()}
          </div>
        </div>
      )}
    </div>
  );
};

export const ReadGames = () => {
  return <h1 className="game-header">Nivå 1</h1>;
};
