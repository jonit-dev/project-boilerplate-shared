export interface IUserEntity {
  id: string;
  type: UserTypes;
  email: string;
  unsubscribed: boolean;
}

export enum UserTypes {
  Regular = "Regular",
  Admin = "Admin",
}
