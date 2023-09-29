// import { useState } from "react";
// import { getTrainers } from "./trainerService";
import "./Mintrener.css";
import islandFloat from "./islandFloat.png";

export function TrainersList(props) {
  const trainers = props.trainers;
  console.log(props);
  if (trainers.length === 0) {
    return <p>Det finnes ingen trenere ennå</p>;
  }

  return (
    <div className="trainer-container ">
      {trainers.map((trainer) => (
        <div key={trainer.name} className="trainer-bio">
          <div
            className="bio-images"
            onClick={() => {
              props.onTrainerSelected(trainer);
            }}
          >
            <img
              className="trainer-image"
              src={trainer.avatar}
              alt={trainer.name}
            />
            <img className="platform-image" src={islandFloat}></img>
          </div>
          <div className="trainer-details">
            <div className="trainer-name">Navn: {trainer.name}</div>
            <div className="trainer-age">Alder: {trainer.age}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
