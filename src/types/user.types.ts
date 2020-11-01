export interface IUserEntity {
  id: string;
  type: string;
  email: string;
}

export enum UserTypes {
  Regular = "Regular",
  Admin = "Admin",
}
