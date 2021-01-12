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

export const updatePlayerCardBtn = ({ commit }, obj) => {
  commit('UPDATE_PLAYER_CARD_BTN', obj);
};

export const togglePlayerCardSeen = ({ commit }, obj) => {
  commit('TOGGLE_PLAYER_CARD_SEEN', obj);
};

// Cards
export const buildClues = ({ commit }) => {
  commit('BUILD_CLUES');
};

export const updateCardWhodunnitState = ({ commit }, key) => {
  commit('UPDATE_CARD_WHODUNNIT_STATE', key);
};

export const toggleCardMine = ({ commit }, key) => {
  commit('TOGGLE_CARD_MINE', key);
};
