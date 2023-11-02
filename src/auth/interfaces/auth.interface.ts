import { ROLES } from 'src/constants';

export interface IJwtPayload {
  id: string;
  username: string;
  email: string;
  role: ROLES;
}

export interface IAuthTokenResult {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}

export interface IUseToken {
  role: string;
  sub: string;
  isExpired: boolean;
}
