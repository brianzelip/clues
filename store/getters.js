export const nPlayers = (state) => Object.keys(state.players).length;

export const allCards = (state) => [
  ...state.CARDS.people,
  ...state.CARDS.rooms,
  ...state.CARDS.weapons
];

export const defaultStateHasChanged = (state) => {
  const defaultCardsStr = JSON.stringify(state.Cards());
  const defaultPlayersStr = JSON.stringify([state.Player('Player1')]);
  const emptyPlayersStr = JSON.stringify([]);

  const currentCardsStr = JSON.stringify(state.cards);
  const currentPlayersStr = JSON.stringify(state.players);

  if (
    currentCardsStr == defaultCardsStr &&
    (currentPlayersStr == defaultPlayersStr ||
      currentPlayersStr == emptyPlayersStr)
  ) {
    return false;
  } else {
    return true;
  }
};
