export enum Entities {
  Global = "global", // this one exists only in /translations folder
  Auth = "auth",
  Tasks = "tasks",
  Users = "users",
  Logs = "logs",
}

export enum AuthTranslationKeys {
  InvalidCredentials = "InvalidCredentials",
  FormInputEmailPlaceholder = "FormInputEmailPlaceholder",
  FormInputPasswordPlaceholder = "FormInputPasswordPlaceholder",
  Login = "Login",
  CreateYourAccount = "CreateYourAccount",
  ForgotPassword = "ForgotPassword",
}

export enum GlobalTranslationKeys {
  WaitMessage = "WaitMessage",
  ForbiddenKeyUpdate = "ForbiddenKeyUpdate",
  ServerBootstrapError = "ServerBootstrapError",
  ServerRunning = "ServerRunning",
}

export enum UserTranslationKeys {
  AdminOnly = "AdminOnly",
}

export enum LogTranslationKeys {
  LogDeleteNotFound = "LogDeleteNotFound",
}
