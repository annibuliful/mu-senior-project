import Knex = require('knex');
import { IQuery } from './sql';

export interface IDatabaseBuilder<T> {
  getById(id: string): Knex.QueryBuilder;
  getByQuery(query: IQuery): Knex.QueryBuilder;
  create(data: T): Knex.QueryBuilder;
  updateById(id: string, data: T): Knex.QueryBuilder;
  deleteById(id: string): Knex.QueryBuilder;
}
