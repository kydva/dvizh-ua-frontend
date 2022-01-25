import {defineModule} from 'direct-vuex';

import {store} from '.';

import {ICategories, CategoriesGateway} from "@/database/categories"

interface State {
  categories: ICategories.Category[]
}

export const categories = defineModule({
  namespaced: true,

  state: {categories: []} as State,

  mutations: {
    setCategories(state: State, categories: ICategories.Category[]) {
      state.categories = categories;
    },
  },

  actions: {
    async fetchCategories() {
      const categories = await CategoriesGateway.getCategories()

      store.commit.categories.setCategories(categories)
    }
  },
});
