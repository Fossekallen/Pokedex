import * as trainerService from "../api/trainerService";
import "../styles/navigationBar.css";

export const NavBio = (props) => {
  const [appState, setAppState] = props;
  const trainerProfile = trainerService.getSelectedTrainer();
  const trainerLibrary = appState.selectedTrainerName;
  if (!trainerProfile) {
    return <p className="nav-no-trainer-message">Fant ikke trener</p>;
  }

  return (
    <div className="nav-bio-container">
      <img
        className="nav-bio"
        src={trainerProfile.avatar}
        alt={trainerLibrary.selectedTrainerName}
      />
      <form className="nav-trainer-text">
        <label>{trainerLibrary.selectedTrainerName}</label>
        <label>Level {trainerProfile.favPokemon}</label>
        <label> XP {appState.taskState.points}</label>
      </form>
    </div>
  );
};
