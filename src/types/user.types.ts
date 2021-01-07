export interface IUserEntity {
  id: number | null;
  name: string | null;
  type: UserTypes | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  created: Date | null;
  updated: Date | null;
  unsubscribed: boolean | null;
}

export enum UserTypes {
  Admin = "Admin",
  Regular = "Regular",
  Staff = "Staff",
}

export enum UserAuthFlow {
  Basic = "Basic",
  GoogleOAuth = "GoogleOAuth",
  FacebookOAuth = "FacebookOAuth",
  LinkedInOAuth = "LinkedInOAuth",
}
