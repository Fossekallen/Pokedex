import { useState } from "react";
import { TrainerAvatar } from "./TrainerAvatar";

export function TrainerForm(props) {
  const [name, setName] = useState("");
  const [showAvatar, setShowAvatar] = useState(false);
  const [age, setAge] = useState("");
  const [favPokemon, setFavPokemon] = useState("");
  const [avatar, setAvatar] = useState("");

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

    props.onSubmit(newTrainer);
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
        className="select-trainer"
        onClick={() => setShowAvatar((prevState) => !prevState)}
      >
        Velg Trener
      </button>

      <button className="submitButton" type="submit">
        Lagre
      </button>
      {showAvatar && <TrainerAvatar setAvatar={setAvatar} />}
    </form>
  );
}
