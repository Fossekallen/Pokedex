import { useState } from "react";
import "../styles/games.css";
import jordan from "../../assets/jordan.png";
import leo from "../../assets/leo-trener1.png";
import * as mathService from "../api/mathService";

// to do sindre. this is duplicated
const setTaskState = (appState, taskState, taskHistory) => {
  const appStateClone = structuredClone(appState);
  appStateClone.taskState = taskState;
  appStateClone.taskHistory = taskHistory;
  return appStateClone;
};

export const MathGames = ({ appState, setAppState }) => {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState(0);
  const answer = props.appState.taskState.answer;
  const taskState = props.appState.taskState;
  const taskHistory = props.appState.taskHistory;

  function onInputValueChange(e) {
    const mathValue = e.target.value;
    const parsedValue = Number.parseInt(mathValue);
    setInputValue(parsedValue);
  }

  function onSubmitGuess() {
    setSubmittedAnswer(inputValue);
    setCount(count + 1);

    if (inputValue === answer) {
      console.log("the answer is correct. you tried " + count + "times");
    } else if (inputValue !== answer) {
      console.log("I pitty the fool");
    }
    const attemptCount = attemptCount(count, taskState);
    const updateTaskHistory = mathService.addAttemptToTaskHistory(
      appState,
      taskHistory,
    );
    const currentLevel = taskState.level;
    const newMath = mathService.createTaskState(currentLevel);
    const clonedAppState = setTaskState(appState, newMath, updateTaskHistory);
    setAppState(clonedAppState);
  }

  return (
    <div>
      <h1
        className={`game-header ${inputValue === 0 ? "red" : "blue"}`}
        style={{
          backgroundColor: inputValue === 0 ? "red" : "blue",
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
          onChange={onInputValueChange}
        ></input>
        <button className="mathButton" onClick={onSubmitGuess} value={"Reset"}>
          Send Svar
        </button>
        <div className="mathAnswerGraphic">
          <div className="asterisk">
            {answer} <p>Is the answer</p>
          </div>{" "}
          <div className="asterisk">
            {inputValue}
            <p>Is the inputValue</p>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
