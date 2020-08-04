import { Injectable } from '@nestjs/common';
import db from '../../knex';
import * as argon from 'argon2';

// interface
import { ICreateUser, IUser, IQuery } from './user.interface';

@Injectable()
export class UserService {
  private readonly serviceName = 'users';

  async create(data: ICreateUser): Promise<IUser> {
    try {
      const hashPassword = await argon.hash(data.password);
      const result = await db
        .insert({ ...data, password: hashPassword })
        .into('users')
        .returning('*');

      return {
        message: 'created',
        ...result[0],
      };
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async update(id: number, data: ICreateUser): Promise<IUser> {
    try {
      const hashPassword = await argon.hash(data.password);
      const result = await db('users')
        .update({ ...data, password: hashPassword, updateAt: new Date() })
        .where('userId', '=', id)
        .returning('*');

      const isNotUpdated = result.length === 0;
      if (isNotUpdated) {
        throw 'user id not found';
      }

      return {
        message: 'updated',
        ...result[0],
      };
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async getById(id: number): Promise<IUser> {
    try {
      const result = await db
        .select(
          'userId',
          'role',
          'username',
          'password',
          'fullname',
          'birthDate',
          'profileImage',
          'gender',
          'phone',
          'createAt',
          'updateAt',
        )
        .from('users')
        .where('userId', '=', id)
        .limit(1);

      const isNotFound = result.length === 0;
      if (isNotFound) {
        throw 'user id not found';
      }

      return result[0];
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async getByQuery({ search, orderBy }: IQuery): Promise<IUser[]> {
    let baseQuery = db
      .select(
        'userId',
        'role',
        'username',
        'password',
        'fullname',
        'birthDate',
        'profileImage',
        'gender',
        'phone',
        'createAt',
        'updateAt',
      )
      .from('users');

    if (search) {
      baseQuery = baseQuery.where('fullname', 'like', `%${search}%`);
    }

    const isOrderByExist = orderBy !== undefined;
    if (isOrderByExist) {
      baseQuery = baseQuery.orderBy(orderBy);
    }

    const result = await baseQuery;
    return result;
  }
}
