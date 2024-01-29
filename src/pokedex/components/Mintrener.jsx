import { useState } from "react";
import "../styles/Mintrener.css";
import { TrainerForm } from "./TrainerForm";
import { TrainersList } from "./ListeAvTrenere";
import * as trainerService from "../api/trainerService";
import { appStateOps } from "../domain/appStateOperations";

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

export const MinTrener = (props) => {
  const { appState, setAppState } = props;
  const [customizeTrainer, setCustomizeTrainer] = useState("create");

  const createNewTrainer = (newTrainer) => {
    const nameAlreadyExists = checkTrainerNameAlreadyExists(
      appState,
      newTrainer.name,
    );
    if (nameAlreadyExists) {
      console.log("Name already taken, stopping createNewTrainer");
      return { type: "error", message: "name exists" };
    }
    // to do Stian: set avatar as requirement for completing the form.

    const newAppState = addTrainerToAppState(appState, newTrainer);
    setAppState(newAppState);
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
            const updatedAppStateClone = appStateOps.updateCurrentTrainer(
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
