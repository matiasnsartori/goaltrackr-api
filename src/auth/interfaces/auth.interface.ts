import { ROLES } from 'src/constants';

export interface IJwtPayload {
  id: string;
  username: string;
  email: string;
  role: ROLES;
}
