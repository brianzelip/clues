import Vue from 'vue';

export const ADD_NEW_PLAYER = (state, payload) => {
  //payload = { name,  index }
  Vue.set(state.players, payload.index, payload.name);
};

export const UPDATE_PLAYER_NAME = (state, payload) => {
  //payload = {player, index}
  Vue.set(state.players, payload.index, payload.player);
};

export const REMOVE_PLAYER = (state, payload) => {
  // payload = index
  const i = payload;
  const start = state.players.slice(0, i);
  const end = state.players.slice(i + 1);
  const newPlayerList = [...start, ...end];

  Vue.set(state, 'players', newPlayerList);
};
