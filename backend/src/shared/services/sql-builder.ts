import Knex = require('knex');
import db from '../../knex';
import { IQuery } from '../interface/sql';

export interface ISqlBuilder {
  modelName: string;
  primaryKeyName: string;
  columns: string[];
}
export class sqlBuilder<T> {
  private modeName: string;
  private columns: string[];
  private primaryKeyName: string;

  constructor({ modelName, columns, primaryKeyName }: ISqlBuilder) {
    this.modeName = modelName;
    this.columns = columns ?? [];
    this.primaryKeyName = primaryKeyName;
  }

  getByQuery({ orderBy, query, limit, offset }: IQuery): Knex.QueryBuilder {
    let baseQuery = db.select(this.columns ?? '*').from(this.modeName);

    const isQueryExist = query !== undefined;
    if (isQueryExist) {
      query.forEach(({ column, operator, value, method }) => {
        const valueQuery =
          operator === 'like' || operator === 'not like' ? `%${value}%` : value;

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

    return baseQuery;
  }

  getById(id: string): Knex.QueryBuilder {
    return db
      .select(this.columns ?? '*')
      .from(this.modeName)
      .where(this.primaryKeyName, '=', id);
  }

  updateById(id: string, data: T): Knex.QueryBuilder {
    return db(this.modeName)
      .update(data)
      .where(this.primaryKeyName, '=', id);
  }

  create(data: T): Knex.QueryBuilder {
    return db
      .insert(data)
      .into(this.primaryKeyName)
      .returning('*');
  }

  deleteById(id: string): Knex.QueryBuilder {
    return db(this.primaryKeyName).where(this.primaryKeyName, '=', id);
  }
}
