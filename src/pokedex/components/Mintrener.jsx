import { useState } from "react";
import "../styles/Mintrener.css";
import { TrainerForm } from "./TrainerForm";
import { TrainersList } from "./ListeAvTrenere";
import * as trainerService from "../api/trainerService";

function addTrainerToAppState(appState, newTrainer) {
  const stateClone = structuredClone(appState);

  // Add "newTrainer" to allTrainers in stateClone
  stateClone.allTrainers.push(newTrainer);

  return stateClone;
}

function checkTrainerNameAlreadyExists(appState, trainerName) {
  const existingTrainer = appState.allTrainers.find((existingTrainer) => {
    return existingTrainer.name === trainerName;
  });

  return Boolean(existingTrainer);
}

const updateCurrentTrainer = (appState, selectedTrainerName) => {
  const appStateClone = structuredClone(appState);

  // set trainer by name
  appStateClone.selectedTrainerName = selectedTrainerName;

  return appStateClone; // <- IMPORTANT
};

export const MinTrener = (props) => {
  const { appState, setAppState } = props;
  const [customizeTrainer, setCustomizeTrainer] = useState("create");

  const createNewTrainer = (newTrainer) => {
    //0.check new trainer name
    const nameAlreadyExists = checkTrainerNameAlreadyExists(
      appState,
      newTrainer.name,
    );
    if (nameAlreadyExists) {
      console.log("Name already taken, stopping createNewTrainer");
      // 0.b. Return error message to component that called the function
      return { type: "error", message: "name exists" };
    }

    // 1. Create an updated state
    const newAppState = addTrainerToAppState(appState, newTrainer);
    // 2. Render the app with the new state
    setAppState(newAppState);
    //newtrainer submit contains updated trainer. needs to be put in appState for instant update

    // 3. Persist all trainers to trainerService
    trainerService.saveTrainers(newAppState.allTrainers);
  };

  return (
    <div className="middle1">
      <div className="trainer-buttons-container">
        {customizeTrainer === "pick" && (
          <button
            className="create-trainer-list-button-style"
            type="button"
            onClick={() => setCustomizeTrainer("create")}
          >
            Lag Trener
          </button>
        )}
        {customizeTrainer === "create" && (
          <button
            className="create-trainer-list-button-style"
            type="button"
            onClick={() => setCustomizeTrainer("pick")}
          >
            Trenere
          </button>
        )}
      </div>
      {customizeTrainer === "create" && (
        <TrainerForm
          onSubmit={(newTrainer) => {
            console.log("newTrainer submit:", newTrainer);

            return createNewTrainer(newTrainer);
          }}
        />
      )}
      {customizeTrainer === "pick" && (
        <TrainersList
          trainers={appState.allTrainers}
          onTrainerSelected={(selectedTrainer) => {
            // 1. Create a updated state
            const updatedAppStateClone = updateCurrentTrainer(
              appState,
              selectedTrainer.name,
            );
            // 2. tell react about it
            setAppState(updatedAppStateClone);
            // 3. Persist to trainerService
            trainerService.saveSelecetdTrainer(selectedTrainer);
          }}
        />
      )}
    </div>
  );
};
