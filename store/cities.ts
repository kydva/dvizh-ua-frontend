import {defineModule} from 'direct-vuex';

import {store} from '.';

import {ICities, CitiesGateway} from "@/database/cities"

interface State {
  cities: ICities.City[]
}

export const cities = defineModule({
  namespaced: true,

  state: {cities: []} as State,

  mutations: {
    setCities(state: State, cities: ICities.City[]) {
      state.cities = cities;
    },
  },

  actions: {
    async fetchCities() {
      const cities = await CitiesGateway.getCities()

      store.commit.cities.setCities(cities)
    }
  },
});
