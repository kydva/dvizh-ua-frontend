import {defineModule} from 'direct-vuex';

import {store} from '.';

import {AuthGateway, IAuth} from '@/database/auth';

import Role = IAuth.Role;

interface State {
  user: IAuth.User | null;
}

export const auth = defineModule({
  namespaced: true,

  state: { user: null } as State,

  getters: {
    isAdmin(state: State):Boolean {
      return state.user?.roles.includes(Role.admin) || false
    }
  },

  mutations: {
    setUser(state: State, user: IAuth.User) {
      state.user = user;
    },
    purgeUser(state: State) {
      state.user = null;
    },
  },

  actions: {
    async login(_, credentials: IAuth.Login) {
      await AuthGateway.login(credentials);

      await store.dispatch.auth.fetchUser();
    },

    async register(_, user: IAuth.Register) {
      await AuthGateway.register(user);

      await store.dispatch.auth.login(user);
    },

    async fetchUser({ state }) {
      if (state.user) return;

      try {
        const user = await AuthGateway.me();

        store.commit.auth.setUser(user);
      } catch (e: any) {
        if (e.response?.status !== 401) {
          console.error(e);
        }
      }
    },

    logout() {
      localStorage.removeItem('token');

      store.commit.auth.purgeUser();
    },
  },
});
