import { getSelectedTrainer } from "../api/trainerService";
import "../styles/navigationBar.css";

export const NavBio = () => {
  const trainerProfile = getSelectedTrainer();

  if (!trainerProfile) {
    return <p className="nav-no-trainer-message">Fant ikke trener</p>;
  }

  return (
    <div className="nav-bio-container">
      <img
        className="nav-bio"
        src={trainerProfile.avatar}
        alt={trainerProfile.name}
      />
      <form className="nav-trainer-text">
        <label>{trainerProfile.name}</label>
        <label>Level {trainerProfile.favPokemon}</label>
      </form>
    </div>
  );
};
