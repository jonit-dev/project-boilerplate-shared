export interface IUserEntity {
  id: string;
  type: string;
  email: string;
  unsubscribed: boolean;
}

export enum UserTypes {
  Regular = "Regular",
  Admin = "Admin",
}
