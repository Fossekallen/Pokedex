import { getSelectedTrainer } from "./trainerService";

export const NavBio = () => {
  const trainerProfile = getSelectedTrainer();

  if (!trainerProfile) {
    return <p>Fant ikke trener</p>;
  }

  return (
    <div>
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
