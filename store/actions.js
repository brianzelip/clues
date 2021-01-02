export const addNewPlayer = ({ commit }, payload) => {
  commit('ADD_NEW_PLAYER', payload);
};

export const updatePlayerName = ({ commit }, payload) => {
  commit('UPDATE_PLAYER_NAME', payload);
};

export const removePlayer = ({ commit }, payload) => {
  commit('REMOVE_PLAYER', payload);
};
