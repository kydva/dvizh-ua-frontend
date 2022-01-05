import {api} from "~/plugins/axios";

import {ICities} from "./cities.types";

export class CitiesGateway {
  static async getCities(): Promise<ICities.City[]> {
    const response = await api.get('/cities')

    return response.data
  }
}
