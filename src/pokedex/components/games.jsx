import { useState } from "react";
import "../styles/games.css";
import jordan from "../../assets/jordan.png";
import leo from "../../assets/leo-trener1.png";

export const MathGames = (props) => {
  const { appState, setAppState } = props;
  const [guess, setGuess] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState(0);
  const answer = props.appState.taskState.answer;
  const taskState = props.appState.taskState;

  function onGuess(e) {
    const mathValue = e.target.value;
    const parsedValue = Number.parseInt(mathValue);
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
      <h1
        className={`game-header ${guess === 0 ? "red" : "blue"}`}
        style={{
          backgroundColor: guess === 0 ? "red" : "blue",
        }}
      >
        Nivå {appState.taskState.level}
      </h1>
      <div className="calculation">
        <label className="mathNumbers">{taskState.problem}</label>{" "}
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
  );
};
