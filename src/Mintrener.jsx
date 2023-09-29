import { useState } from "react";
import "./Mintrener.css";
import { TrainerForm } from "./TrainerForm";
import { TrainersList } from "./ListeAvTrenere";
import {
  getTrainers,
  saveTrainers,
  saveSelecetdTrainer,
} from "./trainerService";

export const MinTrener = () => {
  const [customizeTrainer, setCustomizeTrainer] = useState("create");
  const [trainers, setTrainers] = useState(getTrainers);

  const handleSubmit = (newTrainer) => {
    console.log("MinTrener console log:", newTrainer);
    const nameAlreadyExists = trainers.find((existingTrainer) => {
      return existingTrainer.name === newTrainer.name;
    });
    if (nameAlreadyExists) {
      return;
    }
    trainers.push(newTrainer);
    saveTrainers(trainers);
    setTrainers(trainers);
  };

  return (
    <div className="middle1">
      <div className="trainer-buttons">
        <button
          className="trainer-buttons button"
          type="button"
          onClick={() => setCustomizeTrainer("create")}
        >
          Lag Trener
        </button>
        <button
          className="select-trainer-button-style"
          onClick={() => setCustomizeTrainer("pick")}
        >
          Trenere
        </button>
      </div>
      {customizeTrainer === "create" && (
        <TrainerForm
          // className="createTrainerForm"
          onSubmit={(newTrainer) => {
            console.log("newTrainer submit:", newTrainer);

            return handleSubmit(newTrainer);
          }}
        />
      )}
      {customizeTrainer === "pick" && (
        <TrainersList
          trainers={trainers}
          onTrainerSelected={(selectedTrainer) => {
            console.log("trainerSelected", selectedTrainer);
            saveSelecetdTrainer(selectedTrainer);
          }}
        />
      )}
    </div>
  );
};
