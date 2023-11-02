import * as jwt from 'jsonwebtoken';
import {
  IAuthTokenResult,
  IUseToken,
} from 'src/auth/interfaces/auth.interface';

export const useToken = (token: string): IUseToken | string => {
  try {
    const decoded = jwt.decode(token) as IAuthTokenResult;
    console.log({ decoded });
    const curretnDate = new Date();
    const expirationDate = new Date(decoded.exp);

    return {
      sub: decoded.sub,
      role: decoded.role,
      isExpired: +expirationDate <= +curretnDate / 1000,
    };
  } catch (error) {
    return error.message;
  }
};
