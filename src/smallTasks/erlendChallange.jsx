import { useState } from "react";

const getRandomNumber = () => {
  return Math.ceil(Math.random() * 50);
};

export const GuessingGame = () => {
  // console.log(getRandomNumber);
  const [guesses, setGuesses] = useState(0);
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRadomNumber] = useState(getRandomNumber());

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  function incrementGuesses() {
    setGuesses(guesses + 1);
  }

  function onGuess() {
    incrementGuesses();
    console.log(randomNumber);
    if (inputValue === "") {
      setMessage("");
    } else if (parseInt(inputValue) === randomNumber) {
      setMessage(`${inputValue} is correct`);
    } else if (parseInt(inputValue) > randomNumber) {
      setMessage(`${inputValue} is too high`);
    } else if (parseInt(inputValue) < randomNumber) {
      setMessage(`${inputValue} is too low`);
    }
  }

  function handleRestartGame() {
    setGuesses(0);
    setInputValue("");
    setMessage("");
    setRadomNumber(getRandomNumber());
  }

  return (
    <div>
      <h1>Guess a number</h1>
      <input
        placeholder="Enter number"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={onGuess}>Guess</button>
      <p> {`You have guessed ${guesses} times`}</p>
      <p> {message}</p>
      <button onClick={handleRestartGame}>Restart Gamme</button>
    </div>
  );
};
