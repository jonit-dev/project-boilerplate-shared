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
  Guardian = "Guardian",
  Institution = "Institution",
  Supervisor = "Supervisor",
  Staff = "Staff", //Caregiver
}
