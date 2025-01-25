import type { TBase } from '~/types/base';

export interface TUser extends TBase {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  date_format: string;
  fullname: string;
  locale: string;
  logged_in: string;
  online: boolean;
  picture: string;
  permission: {
    level: number;
    name: string;
  };
}

export interface UserDataDto {
  first_name: string;
  last_name: string;
  email: string;
}

export interface TAuthData {
  token: string;
  user: TUser;
}
