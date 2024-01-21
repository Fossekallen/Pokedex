/**
 * Rules of "operations"
 * 1. Operations are pure functions, so they do not modify their inputs, nor do
 *    they perform "magic" things like reading from disk or localStorage.
 * 2. Operations typically take their "domain object" as the first parameter, in
 *    this file that's "AppState"
 * 3. We only export a named object so that all "operations" are namespaced,
 *    eg. `appStateOps.setTaskState()`
 * 4. Types are exported separately, and should live in this file
 */

export type TaskState = {
  type: string;
  level: number;
  problem: string;
  answer: number;
  attempts: number;
  reward: {
    points: number;
    pokemonId: string;
    backgroundId: string;
    avatarId: string;
  };
};
// TODO: Stian complete this

export type AppState = {
  // TODO: Stian complete this
  currentPage: "pokedex" | "minTrener" | "games";
  selectedTrainerName: string;
  taskState: TaskState;
  taskHistory: TaskState[];
};

const setTaskState = (appState: AppState, taskState: TaskState): AppState => {
  const appStateClone = structuredClone(appState);
  appStateClone.taskState = taskState;
  return appStateClone;
};

export const appStateOps = {
  setTaskState,
};
