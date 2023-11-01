import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UsersEntity } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  public async validateUser(username: string, password: string): Promise<any> {
    const userByUsername = await this.userService.findBy({
      key: 'username',
      value: username,
    });
    const userByEmail = await this.userService.findBy({
      key: 'email',
      value: username,
    });
    if (userByUsername) {
      const match = await bcrypt.compare(password, userByUsername.password);
      if (match) {
        return userByUsername;
      }
    }
    if (userByEmail) {
      const match = await bcrypt.compare(password, userByEmail.password);
      if (match) {
        return userByEmail;
      }
    }
  }

  public signJwt({
    payload,
    secret,
    expires,
  }: {
    payload: jwt.JwtPayload;
    secret: any;
    expires: number | string;
  }) {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

  public async generateJwt(user: UsersEntity) {
    const getUser = await this.userService.findUserById(user.id);
    const payload: jwt.JwtPayload = {
      id: getUser.id,
      username: getUser.username,
      email: getUser.email,
      role: getUser.role,
    };
    return {
      accessToken: this.signJwt({
        payload,
        secret: process.env.JWT_SECRET,
        expires: process.env.JWT_EXPIRATION,
      }),
      user,
    };
  }
}
