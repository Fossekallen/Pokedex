import * as trainerService from "../api/trainerService";
import { appStateOps } from "../domain/appStateOperations";
import "../styles/navigationBar.css";

export const NavBio = (props) => {
  const { appState } = props;
  const trainerProfile = trainerService.getSelectedTrainer();
  const trainerLibrary = appState.selectedTrainerName;
  const taskState = appState.taskState;
  if (!trainerProfile) {
    return <p className="nav-no-trainer-message">Fant ikke trener</p>;
  }

  return (
    <div className="nav-bio-container">
      <img
        className="nav-bio"
        src={trainerProfile.avatar}
        alt={trainerLibrary}
      />
      <form className="nav-trainer-text">
        <label>{trainerLibrary}</label>
        <label>Level {trainerProfile.favPokemon}</label>
        <label> XP {taskState.reward.points}</label>
      </form>
    </div>
  );
};
