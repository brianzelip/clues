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
