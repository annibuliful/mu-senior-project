import { Injectable } from '@nestjs/common';
import db from '../../knex';
import * as argon from 'argon2';

// interface
import { ICreateUser, IUser } from './user.interface';
import { IQuery } from '../../shared/interface/sql';
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

  async getByQuery({
    orderBy,
    query,
    limit,
    offset,
  }: IQuery): Promise<IUser[]> {
    try {
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

      const isQueryExist = query !== undefined;
      if (isQueryExist) {
        query.forEach(({ column, operator, value, method }) => {
          const valueQuery =
            operator === 'like' || operator === 'not like'
              ? `%${value}%`
              : value;

          baseQuery = baseQuery[method].call(
            baseQuery,
            column,
            operator,
            valueQuery,
          );
        });
      }

      const isOrderByExist = orderBy !== undefined;
      if (isOrderByExist) {
        baseQuery = baseQuery.orderBy(orderBy);
      }

      const isLimitExist = limit !== undefined;
      if (isLimitExist) {
        baseQuery = baseQuery.limit(limit);
      }

      const isOffsetExist = offset !== undefined;
      if (isOffsetExist) {
        baseQuery = baseQuery.offset(offset);
      }

      const result = await baseQuery;
      return result;
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
}
