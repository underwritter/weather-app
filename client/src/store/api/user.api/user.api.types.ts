export interface IUserRegisterApiProps {
  email: string;
  password: string;
  name: string;
}

export interface IUserRegistrationApiResponse {
  message: string;
  success: boolean;
}

export interface IUserAuthorizationApiResponse {
  token: string;
  success: boolean;
}

export interface IUserAuthApiProps {
  email: string;
  password: string;
}
