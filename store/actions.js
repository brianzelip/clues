// Players
export const addNewPlayer = ({ commit }) => {
  commit('ADD_NEW_PLAYER');
};

export const updatePlayer = ({ commit }, payload) => {
  commit('UPDATE_PLAYER', payload);
};

export const removePlayer = ({ commit }, payload) => {
  commit('REMOVE_PLAYER', payload);
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
