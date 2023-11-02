import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { PUBLIC_KEY } from 'src/constants';
import { UsersService } from 'src/users/services/users.service';
import { IUseToken } from '../interfaces/auth.interface';
import { useToken } from 'src/utils/use.token';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UsersService,
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest<Request>();
    const token = req.headers['authorization'];
    console.log({ token });
    if (!token || Array.isArray(token)) {
      throw new UnauthorizedException('invalid token');
    }
    const manageToken: IUseToken | string = useToken(token);

    console.log({ manageToken });

    if (typeof manageToken === 'string') {
      throw new UnauthorizedException(manageToken);
    }

    if (manageToken.isExpired) {
      throw new UnauthorizedException('token expired');
    }

    const user = await this.userService.findUserById(manageToken.sub);
    if (!user) {
      throw new UnauthorizedException('invalid token');
    }
    req.idUser = user.id;
    req.roleUser = user.role;
    return true;
  }
}
