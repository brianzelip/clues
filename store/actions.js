// Theme
export const toggleTheme = ({ commit }) => {
  commit('TOGGLE_THEME');
};

// Reset
export const resetCardsAndPlayers = ({ commit }) => {
  commit('RESET_CARDS');
  commit('RESET_PLAYERS');
};

// Players
export const addNewPlayer = ({ commit }) => {
  commit('ADD_NEW_PLAYER');
};

export const updatePlayer = ({ commit }, obj) => {
  commit('UPDATE_PLAYER', obj);
};

export const removePlayer = ({ commit }, index) => {
  commit('REMOVE_PLAYER', index);
};

export const updatePlayerTrackerBtn = ({ commit }, obj) => {
  commit('UPDATE_PLAYER_TRACKER_BTN', obj);
};

export const togglePlayerCardSeen = ({ commit }, obj) => {
  commit('TOGGLE_PLAYER_CARD_SEEN', obj);
};

// Cards
export const buildClues = ({ commit }) => {
  commit('BUILD_CLUES');
};

export const updateCardWhodunnitState = ({ commit, state }, key) => {
  // whodunnit card states: 0 (unknown), 1 (not it), 2 (it)
  // if card is mine, do nothing since `toggleCardMine` handles it
  const wcs = state.cards[key].whodunnitCardState;
  const mine = state.cards[key].mine || false;

  if (!mine && wcs < 2) {
    commit('SET_CARD_WHODUNNIT_STATE', {
      key,
      wcs: wcs + 1
    });
  } else if (!mine) {
    commit('SET_CARD_WHODUNNIT_STATE', {
      key,
      wcs: 0
    });
  }
};

export const toggleCardMine = ({ commit, state }, key) => {
  // if card is mine before mutation, it will be !mine after
  // if card is mine, it's not it
  // whodunnit card state options re: mine {0: unknown, 1: not it}
  const mine = state.cards[key].mine;
  const wcs = mine ? 0 : 1;

  commit('TOGGLE_CARD_MINE', key);
  commit('SET_CARD_WHODUNNIT_STATE', { key, wcs });
};
