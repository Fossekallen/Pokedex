import { useState } from "react";
import { TrainerAvatar } from "./TrainerAvatar";

export function TrainerForm(props) {
  const [name, setName] = useState("");
  const [showAvatar, setShowAvatar] = useState(false);
  const [age, setAge] = useState("");
  const [favPokemon, setFavPokemon] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    console.log("handleSubmit i TrainerForm:", e);
    e.preventDefault();
    const newTrainer = {
      name: name,
      age: age,
      favPokemon: favPokemon,
      avatar: avatar,
      // avatar: <img src={e.avatar} alt={e.avatar} />,
    };

    const error = props.onSubmit(newTrainer);
    /**
     * TODO: Homework for Stian
     * Show the following error message on screen for the user
     * Hint: You need to make a new useState()
     */
    // if (error) {
    //   setErrorMessage(error.message);
    // }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAlderChange = (event) => {
    setAge(event.target.value);
  };
  const handleFavPokemonChange = (event) => {
    setFavPokemon(event.target.value);
  };

  return (
    <form className="create-trainer" onSubmit={handleSubmit}>
      <div className="trainer-input-container">
        <input
          placeholder="Navn"
          onChange={handleNameChange}
          type="text"
          value={name}
          className="create-input"
          required
        />
        <input
          placeholder="Alder"
          onChange={handleAlderChange}
          type="number"
          value={age}
          className="create-input"
          required
        />
        <input
          placeholder="Favoritt Pokemon"
          onChange={handleFavPokemonChange}
          className="create-input"
          value={favPokemon}
          required
        />
      </div>
      <button
        type="button"
        className="submitButton"
        onClick={() => setShowAvatar((prevState) => !prevState)}
      >
        Velg Avatar
      </button>

      <button className="submitButton" type="submit">
        Lagre
      </button>
      {showAvatar && <TrainerAvatar setAvatar={setAvatar} />}
    </form>
  );
}
