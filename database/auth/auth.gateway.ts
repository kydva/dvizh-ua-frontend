import { IAuth } from './auth.types';

import { api } from '@/plugins/axios';

export class AuthGateway {
  static async login(credentials: IAuth.Login) {
    const response = await api.post('auth/login', { credentials });

    localStorage.setItem('token', response.data.access_token);
  }

  static async register(user: IAuth.Register): Promise<IAuth.User> {
    const response = await api.post('users', { user });

    return response.data.user;
  }

  static async me(): Promise<IAuth.User> {
    const response = await api.get('users/me');

    return response.data.user;
  }
}
