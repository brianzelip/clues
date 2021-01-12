import Vue from 'vue';
import * as ls from './localStorage.js';

// Initialize
export const INIT_STATE = (state) => {
  console.log('HI FROM MUTATIONS!', ls.storageAvailable());
};

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

export const UPDATE_PLAYER_CARD_BTN = (state, obj) => {
  // obj = {index, card}
  // update state.players[index].cards[card].trackerBtn
  const index = obj.index;
  const card = obj.card;

  if (state.players[index].cards[card].trackerBtn < 5) {
    Vue.set(
      state.players[index].cards[card],
      'trackerBtn',
      ++state.players[index].cards[card].trackerBtn
    );
  } else {
    Vue.set(state.players[index].cards[card], 'trackerBtn', 0);
  }
};

export const TOGGLE_PLAYER_CARD_SEEN = (state, obj) => {
  // obj = {index, card}
  // update state.players[index].cards[card].seenMine
  const index = obj.index;
  const card = obj.card;

  Vue.set(
    state.players[index].cards[card],
    'seenMine',
    !state.players[index].cards[card].seenMine
  );
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

// localStorage

export const SYNC_FROM_LOCAL_STORAGE = (state, obj) => {
  // obj = {players, cards}
  // update state.players with players, state.cards with cards
  const players = obj.players;
  const cards = obj.cards;

  Vue.set(state, 'players', players);
  Vue.set(state, 'cards', cards);
};

export const INIT_STATE_2 = (state) => {
  if (ls.storageAvailable()) {
    console.log('localStorage available...');
    // if (!localStorage.players && !localStorage.cards) {
    //   ls.setEmptyVals();
    // } else {
    //   const players = ls.players();
    //   const cards = ls.cards();

    //   this.syncFromLocalStorage({ players, cards });
    // }
  }
};
