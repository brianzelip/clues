// use vuex.mapGetters to use getters as computed props in component
// or store.getters.doneTodosCount // -> 1
export const nPlayers = (state) => Object.keys(state.players).length;

export const allCards = (state) => [
  ...state.people,
  ...state.rooms,
  ...state.weapons
];
