import {api} from "~/plugins/axios";

import {ICategories} from "./categories.types";

export class CategoriesGateway {
  static async getCategories(): Promise<ICategories.Category[]> {
    const response = await api.get('/categories')

    return response.data
  }
}
