// import SearchParams from "./searchPerams";
import "./global.css";
import { useState } from "react";
import { TrainerBio } from "./trainer-bio";
import { Pokedex } from "./pokedex"; //sett inn i stedet for GuessingGame
import { MinTrener } from "./Mintrener";
import { NavBio } from "./NavBio";
import { GuessingGame } from "./erlendChallange";

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
          Fange pokemon
        </button>
        <button
          className="nav.button"
          role="button"
          onClick={() => setCurrentPage(pageNames[1])}
        >
          {" "}
          Velg Trener
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
      {currentPage === "pokedex" && <GuessingGame />}
    </div>
  );
};

export default App;
