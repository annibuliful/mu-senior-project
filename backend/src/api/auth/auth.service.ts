import { Injectable } from '@nestjs/common';
import jwt from '../../jwt';
import db from '../../knex';
import * as argon from 'argon2';

// interface
import { ILogin } from './auth.interface';

// service
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
  private readonly serviceName = 'auth';
  constructor(private readonly userService: UserService) {}
  async login({ username, password }: ILogin) {
    try {
      // const listResult = await this.userService.getByQuery();
      // const isUserNotExist = listResult.length === 0;
      // if (isUserNotExist) {
      //   throw 'username or password incorrect';
      // }
      //
      // const userInfo = listResult[0];
      //
      // const isPasswordNotCorrect = await argon.verify(userInfo.password,userInfo.password);
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
}
