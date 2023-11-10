import { getTrainers, getSelectedTrainerName } from "../api/trainerService";
import { useState } from "react";
import { MathGames, ReadGames } from "./games";
import "../styles/catchPokemon.css";

export const MathProblems = () => {
  const [selectMathProblem, setSelectMathProblem] = useState("level1"); //level1, level2, level3

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
      <MathGames selectMathProblem={selectMathProblem} />
    </div>
  );
};

export const ReadTasks = () => {
  const [selectReadTask, setSelectReadTask] = useState("none"); //level1, level2, level3
  return (
    <div>
      <button
        className="select-level-button"
        onClick={() =>
          setSelectReadTask(() => {
            if (
              selectReadTask === "none" ||
              selectReadTask === "level2" ||
              selectReadTask === "level3"
            ) {
              return "level1";
            }
          })
        }
      >
        Lese Nivå 1
      </button>
      <button
        className="select-level-button"
        onClick={() =>
          setSelectReadTask(() => {
            if (
              selectReadTask === "none" ||
              selectReadTask === "level1" ||
              selectReadTask === "level3"
            ) {
              return "level2";
            }
          })
        }
      >
        Lese Nivå 2
      </button>
      <button
        className="select-level-button"
        onClick={() =>
          setSelectReadTask(() => {
            if (
              selectReadTask === "none" ||
              selectReadTask === "level1" ||
              selectReadTask === "level2"
            ) {
              return "level3";
            }
          })
        }
      >
        Lese Nivå 3
      </button>
      {selectReadTask === "level1" && <ReadGames />}
      {selectReadTask === "level2" && <ReadGames />}
      {selectReadTask === "level3" && <ReadGames />}
    </div>
  );
};

export const TrainerBio = () => {
  const trainerLibrary = getTrainers();
  const selectedTrainerName = getSelectedTrainerName();
  const [selectTask, setSelectTask] = useState("none"); //math

  if (!selectedTrainerName) {
    return <p>Ingen trener valgt</p>;
  }

  const selectedTrainerBio = trainerLibrary.find(
    (trainer) => trainer.name === selectedTrainerName
  );

  return (
    <div className="catch-pokemon-page">
      <div className="botton-container">
        <button
          onClick={() =>
            setSelectTask(() => {
              if (selectTask === "none") {
                return "math";
              } else {
                return "none";
              }
            })
          }
          className="select-level-button"
        >
          Matte oppgaver
        </button>
        <button
          onClick={() =>
            setSelectTask(() => {
              if (selectTask === "none") {
                return "read";
              } else {
                return "none";
              }
            })
          }
          className="select-level-button"
        >
          Lese oppgaver
        </button>
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

    
        {selectTask === "math" && <MathProblems />}
        {selectTask === "read" && <ReadTasks />}
    

      </div>
    </div>
  );
};
