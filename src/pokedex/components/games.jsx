import { useState } from "react";
import "../styles/games.css";
import jordan from "../../assets/jordan.png";
import leo from "../../assets/leo-trener1.png";
import * as mathService from "../api/mathService";

function getMathProblem() {
  const firstRandomNumber = mathService.firstRandomNumber;
  const secondRandomNumber = mathService.secondRandomNumber;
  return { firstRandomNumber, secondRandomNumber };
}

function calculate(firstRandomNumber, secondRandomNumber, mathLevel) {
  if (mathLevel === "level1") {
    return firstRandomNumber + secondRandomNumber;
  } else if (mathLevel === "level2") {
    return firstRandomNumber - secondRandomNumber;
  } else if (mathLevel === "level3") {
    return firstRandomNumber * secondRandomNumber;
  }
  throw new Error("unknown math error");
}

export const MathGames = (props) => {
  // const [firstRandomNumber, setfirstRandomNumber] = useState(0);
  // const [secondRandomNumber, setsecondRandomNumber] = useState(0);
  const [guess, setGuess] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState(0);
  const mathLevel = props.selectMathProblem;
  const { firstRandomNumber, secondRandomNumber } = getMathProblem();
  const answer = calculate(firstRandomNumber, secondRandomNumber, mathLevel);

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
    const mathValue = e.target.mathValue;
    const parsedValue = Number.parseInt(mathValue);
    setGuess(parsedValue);
    // app;
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
                getMathProblem();
                levelOneMath();
              }}
            >
              Lag Mattestykke
            </button>
            <label className="mathNumbers">{firstRandomNumber}</label>{" "}
            <div className="asterisk">+</div>{" "}
            <label className="mathNumbers">{secondRandomNumber}</label>
            <div className="asterisk">=</div>{" "}
            <input
              className="input-box"
              type="number"
              placeholder="0"
              onChange={onGuess}
            ></input>
            <button className="mathButton" onClick={onSubmitGuess}>
              Send Svar
            </button>
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
              <label className="mathNumbers">{firstRandomNumber}</label>{" "}
              <div className="asterisk">-</div>{" "}
              <label className="mathNumbers">{secondRandomNumber}</label>
              <div className="asterisk">=</div>{" "}
              <input
                className="input-box"
                type="number"
                placeholder="0"
                onClick={onGuess}
              ></input>
              <button className="mathButton" onClick={onSubmitGuess}>
                Send Svar
              </button>
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
              <label className="mathNumbers">{firstRandomNumber}</label>{" "}
              <div className="asterisk">*</div>{" "}
              <label className="mathNumbers">{secondRandomNumber}</label>
              <div className="asterisk">=</div>{" "}
              <input
                className="input-box"
                type="number"
                placeholder="0"
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
