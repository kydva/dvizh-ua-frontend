import Vue from 'vue';

import Vuex from 'vuex';

import { createDirectStore } from 'direct-vuex';

import { auth } from './auth';

Vue.use(Vuex);

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
} = createDirectStore({
  modules: {
    auth,
  },
});

function initStore() {
  store.dispatch.auth.fetchUser();

  return store.original;
}

export const storeOriginal = store.original;

// Export the direct-store instead of the classic Vuex store.
export default initStore;

// The following exports will be used to enable types in the
// implementation of actions and getters.
export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
  store,
};

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store;
