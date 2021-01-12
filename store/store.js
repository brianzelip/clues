import Vue from 'vue';
import Vuex from 'vuex';

import * as state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

import { subscribe } from './localStorage.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [subscribe]
});

export default store;
