export interface IUserEntity {
  id: number;
  type: UserTypes;
  email: string;
  unsubscribed: boolean;
}

export enum UserTypes {
  Regular = "Regular",
  Admin = "Admin",
}
