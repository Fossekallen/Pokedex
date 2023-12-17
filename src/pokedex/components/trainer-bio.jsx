import { getTrainers, getSelectedTrainerName } from "../api/trainerService";
import { useState } from "react";
import { MathGames, ReadGames } from "./games";
import "../styles/catchPokemon.css";

export const MathProblems = (props) => {
  const taskState = props.appState.taskState;

  const mathLevelSelect = (props) => {
    const levelSelect = props;
    if (levelSelect === "none") {
      return;
    } else if (levelSelect === "level1") {
      return setSelectMathProblem("level1");
    } else if (levelSelect === "level2") {
      return setSelectMathProblem("level2");
    } else return setSelectMathProblem("level3");
  };

  return (
    <div className="trainer-info-wrap">
      <button
        className="select-level-button"
        onClick={() => mathLevelSelect("level1")}
      >
        Matte Nivå 1
      </button>
      <button
        className="select-level-button"
        onClick={() => mathLevelSelect("level2")}
      >
        Matte Nivå 2
      </button>
      <button
        className="select-level-button"
        onClick={() => mathLevelSelect("level3")}
      >
        Matte Nivå 3
      </button>
      <MathGames appState={props.appState} setAppState={props.setAppState} />
    </div>
  );
};

export const TrainerBio = (props) => {
  const trainerLibrary = props.appState.allTrainers;
  const selectedTrainerName = props.appState.selectedTrainerName;

  if (!selectedTrainerName) {
    return <p>Ingen trener valgt</p>;
  }

  const selectedTrainerBio = trainerLibrary.find(
    (trainer) => trainer.name === selectedTrainerName,
  );

  return (
    <div className="catch-pokemon-page">
      <div className="botton-container">
        <button className="select-level-button">Matte oppgaver</button>
      </div>
      <div className="page-content">
        <div className="trainer-info-wrap">
          <img
            className="selected-trainer-bio"
            src={selectedTrainerBio.avatar}
            alt={selectedTrainerBio.name}
          />
          <div className="trainer-info-row">
            <p className="trainer-bio-text">Navn: {selectedTrainerBio.name}</p>
            <p className="trainer-bio-text">Alder: {selectedTrainerBio.age}</p>
            <p className="trainer-bio-text">
              Favoritt Pokemon: {selectedTrainerBio.favPokemon}
            </p>
          </div>
        </div>

        <MathProblems
          appState={props.appState}
          setAppState={props.setAppState}
        />
      </div>
    </div>
  );
};
