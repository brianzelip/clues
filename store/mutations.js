import Vue from 'vue';

// PLAYER CRUD
export const ADD_NEW_PLAYER = (state) => {
  const name = `Player${state.players.length + 1}`;

  Vue.set(state.players, state.players.length, name);
};

export const UPDATE_PLAYER = (state, payload) => {
  // update players[index] with player
  // payload = {index, player}
  const i = payload.index;
  const p = payload.player;

  Vue.set(state.players, i, p);
};

export const REMOVE_PLAYER = (state, index) => {
  const start = state.players.slice(0, index);
  const end = state.players.slice(index + 1);
  const newPlayerList = [...start, ...end];

  Vue.set(state, 'players', newPlayerList);
};

// CLUES
export const BUILD_CLUES = (state) => {
  const allCards = [...state.people, ...state.rooms, ...state.weapons];
  const isGroup = (card) => {
    if (state.people.includes(card)) {
      return 'people';
    } else if (state.rooms.includes(card)) {
      return 'rooms';
    } else if (state.weapons.includes(card)) {
      return 'weapons';
    }
  };

  const clues = allCards.reduce((acc, card) => {
    acc[card] = {
      group: isGroup(card),
      id: card,
      displayName:
        isGroup(card) == 'people'
          ? `${card.split(' ')[1]}`
          : isGroup(card) == 'rooms'
          ? `${card.split(' ')[0]}`
          : card,
      dataCardAttr:
        isGroup(card) == 'people'
          ? `${card.split(' ')[1].toLowerCase()}`
          : isGroup(card) == 'rooms'
          ? `${card.split(' ')[0].toLowerCase()}`
          : `${card.split(' ')[card.split(' ').length - 1].toLowerCase()}`,
      mine: false,
      whodunnitCardState: 0,
      seen: []
    };
    return acc;
  }, {});

  Vue.set(state, 'clues', clues);
};

export const UPDATE_CARD_WHODUNNIT_STATE = (state, key) => {
  const state = state.clues[key].whodunnitCardState;

  if (state < 2) {
    Vue.set(state.clues[key], 'whodunnitCardState', state + 1);
  } else {
    Vue.set(state.clues[key], 'whodunnitCardState', 0);
  }
};

export const TOGGLE_CARD_MINE = (state, key) => {
  const mine = state.clues[key].mine;

  Vue.set(state.clues[key], 'mine', !mine);
};
