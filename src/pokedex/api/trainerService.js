const DATA_KEY = "pokemonTrener";
const TRAINER_KEY = "selectedTrainer"

export const saveTrainers = (trainerArray) => {
  console.log("saveTrainers running", trainerArray)
  const data = JSON.stringify(trainerArray);
  localStorage.setItem(DATA_KEY, data);
};

export const getTrainers = () => {
  console.log("getTrainers running")
  const trainersString = localStorage.getItem(DATA_KEY);
  const trainers = JSON.parse(trainersString);
  if (trainers === null) {
    return [];
  }
  return trainers;
};

export const saveSelecetdTrainer = (trainer) => {
  localStorage.setItem(TRAINER_KEY, trainer.name)
}

export const getSelectedTrainerName = () => {
  const name = localStorage.getItem(TRAINER_KEY)
  return name
}

export const getSelectedTrainer = () =>{
const selectedTrainerName = getSelectedTrainerName();
const trainers = getTrainers();
console.log(selectedTrainerName)
if (!selectedTrainerName) {
  return undefined
}
const trainerProfile = trainers.find(
  (trainer) => trainer.name === selectedTrainerName
);
return trainerProfile
}