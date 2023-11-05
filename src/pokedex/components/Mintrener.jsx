import { useState } from "react";
import "../styles/Mintrener.css";
import { TrainerForm } from "./TrainerForm";
import { TrainersList } from "./ListeAvTrenere";
import {
  getTrainers,
  saveTrainers,
  saveSelecetdTrainer,
} from "../api/trainerService";

export const MinTrener = () => {
  const [customizeTrainer, setCustomizeTrainer] = useState("create");
  const [trainers, setTrainers] = useState(getTrainers);
  // console.log("min trener", trainers)
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
      <div className="trainer-buttons-container">
      {customizeTrainer === "pick" && (
        <button
          className="trainer-buttons button"
          type="button"
          onClick={() => setCustomizeTrainer("create")}
        >
          Lag Trener
        </button>
      )}
       {customizeTrainer === "create" && (
        <button
          className="select-trainer-button-style"
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
