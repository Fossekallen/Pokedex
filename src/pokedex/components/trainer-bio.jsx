import { MathGames } from "./games";
import * as mathService from "../api/mathService";
import "../styles/catchPokemon.css";

const setTaskState = (appState, taskState) => {
  const appStateClone = structuredClone(appState);
  appStateClone.taskState = taskState;
  return appStateClone;
};

export const MathProblems = (props) => {
  const { appState, setAppState } = props;

  const handleLevelSelect = (level) => {
    const newTaskState = mathService.createTaskState(level);
    const clonedAppState = setTaskState(appState, newTaskState);
    setAppState(clonedAppState);
  };

  return (
    <div className="trainer-info-wrap">
      <button
        className="select-level-button"
        onClick={() => handleLevelSelect(1)}
      >
        Matte Nivå 1
      </button>
      <button
        className="select-level-button"
        onClick={() => handleLevelSelect(2)}
      >
        Matte Nivå 2
      </button>
      <button
        className="select-level-button"
        onClick={() => handleLevelSelect(3)}
      >
        Matte Nivå 3
      </button>
      <MathGames appState={props.appState} setAppState={props.setAppState} />
    </div>
  );
};

export const TrainerBio = ({ appState, setAppState }) => {
  const trainerLibrary = appState.allTrainers;
  const selectedTrainerName = appState.selectedTrainerName;

  if (!selectedTrainerName) {
    return <p>Ingen trener valgt</p>;
  }

  const selectedTrainerBio = trainerLibrary.find((trainer) => {
    if (trainer.name === selectedTrainerName) {
      return true;
    }
  });

  if (!selectedTrainerBio) {
    console.log("Selected trainer not found. All trainers:", trainerLibrary);
    return <p>Selected trainer not found</p>;
  }

  return (
    <div className="catch-pokemon-page">
      <div className="botton-container">
        <button className="select-level-button">Matte oppgaver</button>
      </div>
      <div className="page-content">
        <div className="trainer-info-wrap">
          <img
            className="selected-trainer-bio"
            // src={selectedTrainerBio.avatar}
            alt={selectedTrainerBio.trainerName}
          />
          <div className="trainer-info-row">
            <p className="trainer-bio-text">
              Navn: {selectedTrainerBio.trainerName}
            </p>
            <p className="trainer-bio-text">Alder: {selectedTrainerBio.age}</p>
            <p className="trainer-bio-text">
              Favoritt Pokemon: {selectedTrainerBio.favPokemon}
            </p>
          </div>
        </div>

        <MathProblems appState={appState} setAppState={setAppState} />
      </div>
    </div>
  );
};
