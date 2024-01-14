import { useState } from "react";
import "../styles/games.css";
import * as mathService from "../api/mathService";

// to do sindre. this is duplicated
const setTaskState = (appState, taskState) => {
  const appStateClone = structuredClone(appState);
  appStateClone.taskState = taskState;
  return appStateClone;
};

const addTaskStateToTaskHistory = (appState, taskState) => {
  const appStateClone = structuredClone(appState);
  appStateClone.taskHistory = appStateClone.taskHistory.concat(taskState);
  return appStateClone;
};

const incrementAttemptsToTaskState = (appState) => {
  const appStateClone = structuredClone(appState);
  appStateClone.taskState.attempts = appState.taskState.attempts + 1;
  return appStateClone;
};

export const MathGames = ({ appState, setAppState }) => {
  const [inputValue, setInputValue] = useState(0);
  const answer = appState.taskState.answer;
  const taskState = appState.taskState;
  function onInputValueChange(e) {
    const mathValue = e.target.value;
    const parsedValue = Number.parseInt(mathValue);
    setInputValue(parsedValue);
  }

  function onSubmitGuess() {
    if (inputValue === answer) {
      const currentLevel = taskState.level;
      const newTaskState = mathService.createTaskState(currentLevel);

      const newAppState1 = setTaskState(appState, newTaskState);
      const newAppState2 = addTaskStateToTaskHistory(newAppState1, taskState);
      setAppState(newAppState2);
      console.log(
        "the answer is correct. you tried " + taskState.attempts + " times",
      );
    }

    if (inputValue !== answer) {
      const incrementedAppState = incrementAttemptsToTaskState(appState);
      console.log(
        "I pitty the fool who tries " +
          incrementedAppState.taskState.attempts +
          " times",
      );
      setAppState(incrementedAppState);
    }
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
