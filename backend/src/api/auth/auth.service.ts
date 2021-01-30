import { Injectable } from '@nestjs/common';
import jwt from '../../jwt';
import * as argon from 'argon2';

// interface
import { ILogin } from './auth.interface';

// service
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
  private readonly serviceName = 'auth';
  constructor(private readonly userService: UserService) {}
  async refreshToken(token: string) {
    try {
      const result = jwt.verify(token);
      if (!result.isValid) {
        throw 'token is invalid';
      }

      // const newToken = jwt.sign(
      //   {
      //     userId: userInfo.userId,
      //     role: userInfo.role,
      //   },
      //   '1d',
      // );
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
  async login({ username, password }: ILogin) {
    try {
      const listResult = await this.userService.getByQuery({
        query: [
          {
            column: 'username',
            operator: '=',
            method: 'where',
            value: username,
          },
        ],
      });
      const isUserNotExist = listResult.length === 0;
      if (isUserNotExist) {
        throw 'username or password incorrect';
      }

      const userInfo = listResult[0];

      const isPasswordNotCorrect =
        (await argon.verify(userInfo.password, password)) === false;
      if (isPasswordNotCorrect) {
        throw 'username or password incorrect';
      }

      const accessToken = jwt.sign(
        {
          userId: userInfo.userId,
          role: userInfo.role,
        },
        '1d',
      );

      const refreshToken = jwt.sign(
        {
          userId: userInfo.userId,
          role: userInfo.role,
        },
        '2d',
      );

      return {
        accessToken,
        refreshToken,
        userInfo: {
          ...userInfo,
          username: null,
          password: null,
        },
      };
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
}
