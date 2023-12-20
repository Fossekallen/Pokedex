export const createTaskState = (level) => {
  if (level === 1) {
    return levelOneMath()
  }
  if (level === 2) {
    return levelTwoMath()
  }
  if (level === 3) {
    return levelThreeMath()
  }
  throw new Error("unsuported math level "+level);
}

export const levelOneMath = () => {
  console.log("level One Running")
  const min = 1;
  const max = 20;

  let firstRandomNumber = 0;
  let secondRandomNumber = 0;

  firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  secondRandomNumber = firstRandomNumber;

  while (secondRandomNumber === firstRandomNumber) {
    secondRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return {
  type: "math",
  level: 1,
  problem: `${firstRandomNumber} + ${secondRandomNumber}`,
  answer: firstRandomNumber + secondRandomNumber,
  attempts: 0,
    reward: {
      points: 20,
      pokemonId: "",
      backgroundId: "",
      avatarId: "",
    },
  }
}

export const levelTwoMath = () => {
  console.log("level Two Running")
  const min = 10;
  const max = 40;
  const firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let secondRandomNumber = firstRandomNumber;

  while (secondRandomNumber === firstRandomNumber) {
    secondRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
  type: "math",
  level: 2,
  problem: `${firstRandomNumber} - ${secondRandomNumber}`,
  answer: firstRandomNumber - secondRandomNumber,
  attempts: 0,
    reward: {
      points: 40,
      pokemonId: "",
      backgroundId: "",
      avatarId: "",
    },
  }
}

export const levelThreeMath = () => {
  console.log("level Three Running")
  const min = 1;
  const max = 10;
  const firstRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let secondRandomNumber = firstRandomNumber;

  while (secondRandomNumber === firstRandomNumber) {
    secondRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return {
    type: "math",
  level: 3,
  problem: `${firstRandomNumber} * ${secondRandomNumber}`,
  answer: firstRandomNumber * secondRandomNumber,
  attempts: 0,
    reward: {
      points: 60,
      pokemonId: "",
      backgroundId: "",
      avatarId: "",
    },
  }
}