export namespace IAuth {
  export interface Login {
    name: string;
    password: string;
  }

  export interface Register {
    name: string;
    password: string;
  }

  export enum Role {
    admin = 'admin',
  }

  export interface User {
    id: number;
    name: string;
    avatar: string;
    roles: Role[];
  }
}
