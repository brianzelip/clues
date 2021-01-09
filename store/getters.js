export const nPlayers = (state) => Object.keys(state.players).length;

export const allCards = (state) => [
  ...state.CARDS.people,
  ...state.CARDS.rooms,
  ...state.CARDS.weapons
];
