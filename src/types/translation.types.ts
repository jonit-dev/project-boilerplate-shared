export enum Entities {
  Global = "global", // this one exists only in /translations folder
  Auth = "auth",
  Tasks = "tasks",
  Users = "users",
  Logs = "logs",
}

export enum AuthTranslationKeys {
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  FORM_INPUT_EMAIL_PLACEHOLDER = "FORM_INPUT_EMAIL_PLACEHOLDER",
  FORM_INPUT_PASSWORD_PLACEHOLDER = "FORM_INPUT_PASSWORD_PLACEHOLDER",
  LOGIN = "LOGIN",
  CREATE_YOUR_ACCOUNT = "CREATE_YOUR_ACCOUNT",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
}

export enum GlobalTranslationKeys {
  WAIT_MESSAGE = "WAIT_MESSAGE",
  FORBIDDEN_KEY_UPDATE = "FORBIDDEN_KEY_UPDATE",
  SERVER_BOOTSTRAP_ERROR = "SERVER_BOOTSTRAP_ERROR",
  SERVER_RUNNING = "SERVER_RUNNING",
}

export enum UserTranslationKeys {
  ADMIN_ONLY = "ADMIN_ONLY",
}

export enum LogTranslationKeys {
  LOG_DELETE_NOT_FOUND = "LOG_DELETE_NOT_FOUND",
}
