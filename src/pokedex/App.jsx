// import SearchParams from "./searchPerams";
import "./styles/global.css";
import { useState } from "react";
import { TrainerBio } from "./components/trainer-bio";
import { Pokedex } from "./components/pokedex"; 
import { MinTrener } from "./components/Mintrener";
import { NavBio } from "./components/NavBio";
// import { GuessingGame } from "./erlendChallange";

const App = () => {
  const pageNames = ["pokedex", "minTrener", "Fange-Pokemon"];
  const [currentPage, setCurrentPage] = useState(pageNames[1]);
  console.log(currentPage);
  return (
    <div className="body">
      <div className="nav">
        {<NavBio className="nav-bio" />}
        <button
          className="button"
          role="button"
          onClick={() => setCurrentPage(pageNames[2])}
        >
          Pokemon Spill
        </button>
        <button
          className="nav.button"
          role="button"
          onClick={() => setCurrentPage(pageNames[1])}
        >
          {" "}
          Lag / Velg Trener
        </button>
        <button
          className="nav.button"
          role="button"
          onClick={() => setCurrentPage(pageNames[0])}
        >
          Pokedex
        </button>
      </div>

      {currentPage === "Fange-Pokemon" && <TrainerBio />}
      {currentPage === "minTrener" && <MinTrener />}
      {currentPage === "pokedex" && <Pokedex />}
    </div>
  );
};

export default App;
