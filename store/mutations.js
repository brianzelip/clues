import Vue from 'vue';

// Player CRUD
export const ADD_NEW_PLAYER = (state) => {
  const index = state.players.length;
  const name = `Player${state.players.length + 1}`;
  const player = state.Player(name);

  Vue.set(state.players, index, player);
};

export const UPDATE_PLAYER = (state, obj) => {
  // update players[index].player with player
  // obj = {index, player}
  const i = obj.index;
  const p = obj.player;

  Vue.set(state.players[i], 'player', p);
};

export const REMOVE_PLAYER = (state, index) => {
  const start = state.players.slice(0, index);
  const end = state.players.slice(index + 1);
  const newPlayerList = [...start, ...end];

  Vue.set(state, 'players', newPlayerList);
};

// Card CRUD
export const UPDATE_CARD_WHODUNNIT_STATE = (state, key) => {
  const wcs = state.cards[key].whodunnitCardState;

  if (wcs < 2) {
    Vue.set(state.cards[key], 'whodunnitCardState', wcs + 1);
  } else {
    Vue.set(state.cards[key], 'whodunnitCardState', 0);
  }
};

export const TOGGLE_CARD_MINE = (state, key) => {
  const mine = state.cards[key].mine;

  Vue.set(state.cards[key], 'mine', !mine);
};
