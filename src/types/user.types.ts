export interface IUserEntity {
  id: number;
  name: string;
  type: UserTypes;
  email: string;
  address: string;
  phone: string;
  created: Date;
  updated: Date;
  unsubscribed: boolean;
}

export enum UserTypes {
  Regular = "Regular",
  Admin = "Admin",
}
