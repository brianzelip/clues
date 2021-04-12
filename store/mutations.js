import Vue from 'vue';

// Theme
export const TOGGLE_THEME = (state) => {
  const t = state.theme == 'dark' ? 'light' : 'dark';
  document.querySelector('body').className = t;
  Vue.set(state, 'theme', t);
};

// Player CRUD
export const RESET_PLAYERS = (state) => {
  Vue.set(state, 'players', [state.Player('Player1')]);
};

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

export const UPDATE_PLAYER_TRACKER_BTN = (state, obj) => {
  // obj = {index, card}
  // update state.players[index].cards[card].trackerBtn
  /**
   * Button states:
   *  1: Unknown (empty)
   *  2: Maybe (?)
   *  3: Maybe ⨉2 (? ⨉2)
   *  4: Maybe ⨉3 (? ⨉3)
   *  5: Does not have card (⨉)
   *  6: Has card (★)
   */
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
export const RESET_CARDS = (state) => {
  Vue.set(state, 'cards', state.Cards());
};

export const SET_CARD_WHODUNNIT_STATE = (state, obj) => {
  // obj = {key, wcs}
  /**
   * Card states:
   *  0: Unknown
   *  1: Not it (adds css strike)
   *  2: It (adds css border)
   */
  const key = obj.key;
  const wcs = obj.wcs;

  Vue.set(state.cards[key], 'whodunnitCardState', wcs);
};

export const TOGGLE_CARD_MINE = (state, key) => {
  const mine = state.cards[key].mine;

  Vue.set(state.cards[key], 'mine', !mine);
};
