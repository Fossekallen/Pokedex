// import SearchParams from "./searchPerams";
import "./styles/global.css";
import { useState } from "react";
import { TrainerBio } from "./components/trainer-bio";
import { Pokedex } from "./components/pokedex";
import { MinTrener } from "./components/Mintrener";
import { NavBio } from "./components/NavBio";
import * as trainerService from "./api/trainerService";

const idealAppState = {
  currentPage: "pokedex",
  selectedTrainer: {
    name: "leo",
    age: 8,
    favPokemon: "jiggelypuff",
    image: "https://...",
    backgroundImage: "https://...",
  },
  capturedPokemon: [
    {
      pokemonId: "pokemon-1",
      trainerId: "trainer-1",
      captureDate: "2020-02-02T12:00:00",
    },
    {
      pokemonId: "pokemon-2",
      trainerId: "trainer-2",
      captureDate: "2020-02-02T12:00:00",
    },
    {
      pokemonId: "pokemon-2",
      trainerId: "trainer-3",
      captureDate: "2020-02-02T12:00:00",
    },
    {
      pokemonId: "pokemon-2",
      trainerId: "trainer-4",
      captureDate: "2020-02-02T12:00:00",
    },
  ],
  taskTypes: ["math", "reading"],
  taskState: {
    type: "math",
    level: 1,
    problem: "1+1",
    answer: 2,
  },
  createTrainer: { name: "", age: 8, favPokemon: "pikachu" },
  allTrainers: [
    { id: "trainer-1", name: "leo", age: 8, favPokemon: "jiggelypuff" },
    { id: "trainer-2", name: "stian", age: 38, favPokemon: "snorlax" },
    { id: "trainer-3", name: "adele", age: 5, favPokemon: "charmander" },
    { id: "trainer-4", name: "vincent", age: 7, favPokemon: "blastois" },
  ],
  allPokemon: [
    {
      id: "pokemon-1",
      name: "Bulbasaur",
      imageUrl: "https://pokeimage.com/...",
    },
    { id: "pokemon-2", name: "Ivysaur", imageUrl: "https://pokeimage.com/..." },
  ],
};

/**
 {  type: 'reading',
    text: 'bla bla bla',
    level: 2,
    startTime: '2023-02-02T12:00:00',}
 */
function getInitialAppState() {
  const allTrainers = trainerService.getTrainers();
  const selectedTrainerName = trainerService.getSelectedTrainerName();
  // getStoredTrainerPoints();
  return {
    currentPage: "pokedex",
    selectedTrainerName, // 'leo'
    allTrainers,
    taskState: {
      type: "math",
      level: 1,
      problem: "1 + 1",
      answer: 2,
      attempts: 0,
      reward: {
        points: 20,
        pokemonId: "",
        backgroundId: "",
        avatarId: "",
      },
    },
    taskHistory: [],
  };
}

function setTaskState(appState, newTaskState) {
  const appStateClone = structuredClone(appState);

  appStateClone.taskState = newTaskState;

  return appStateClone;
}

function createMathTask(mathLevel) {
  const selectedLevel = selectedLevel.mathLevel;
}

function mathTaskWithAnswer() {}

function updateCurrentPage(appState, nextPage) {
  const stateClone = structuredClone(appState);
  stateClone.currentPage = nextPage; //update appstate next page
  return stateClone;
}

const getCurrentPage = (appState) => {
  const selectedPage = appState.currentPage;
  return selectedPage;
};

// const SelectTrainerPage = (props) => {
//   const { appState, setAppState } = props;

//   const onTrainerClick = (trainer) => {
//     const nextState = updateCurrentTrainer(appState, trainer.name);
//     setAppState(nextState);
//   };
// };

const App = () => {
  const [currentAppState, setAppState] = useState(() => {
    return getInitialAppState();
  });

  const currentPage = getCurrentPage(currentAppState);
  console.log("this is the current appState", currentAppState);

  function setCurrentPage(nextPage) {
    // 1. Make updated version of app state
    const nextAppState = updateCurrentPage(currentAppState, nextPage);
    // 2. Rerender app with new app state
    setAppState(nextAppState);
  }

  return (
    <div className="body">
      <div className="nav">
        <button
          className="nav.button"
          role="button"
          onClick={() => setCurrentPage("games")}
        >
          Pokemon Spill
        </button>
        <button
          className="nav.button"
          role="button"
          onClick={() => setCurrentPage("minTrener")}
        >
          {" "}
          Lag / Velg Trener
        </button>
        <button
          className="nav.button"
          role="button"
          onClick={() => setCurrentPage("pokedex")}
        >
          Pokedex
        </button>
        {<NavBio className="nav-bio" appState={currentAppState} />}
      </div>

      {currentPage === "games" && (
        <TrainerBio appState={currentAppState} setAppState={setAppState} />
      )}
      {currentPage === "minTrener" && (
        <MinTrener appState={currentAppState} setAppState={setAppState} />
      )}
      {currentPage === "pokedex" && (
        <Pokedex appState={currentAppState} setAppState={setAppState} />
      )}
    </div>
  );
};

export default App;
