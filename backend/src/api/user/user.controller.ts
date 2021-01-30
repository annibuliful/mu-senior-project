import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { IController } from '../../shared/interface/controller';
import { sqlBuilder } from '../../shared/services/sql-builder';
import { IUser } from './user.interface';

@Controller('users')
export class UserController implements IController<IUser> {
  private modelName: string = 'users';
  private columns: string[] = [
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
  ];
  private primaryKey: string = 'userId';

  private builder;

  constructor() {
    this.builder = new sqlBuilder({
      modelName: this.modelName,
      columns: this.columns,
      primaryKeyName: this.primaryKey,
    });
  }
  @Get('/:id')
  getById(id: string): IUser {
    throw new Error('Method not implemented.');
  }
  getByQuery(query: IQuery): IUser[] {
    throw new Error('Method not implemented.');
  }
  create(data: IUser): IUser {
    throw new Error('Method not implemented.');
  }
  updateById(id: string, data: IUser): IUser {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): string {
    throw new Error('Method not implemented.');
  }
}
