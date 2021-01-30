import db from '../../knex';
import { IQuery } from '../interface/sql';

export class sqlBuilder {
  private modeName: string;
  private columns: string[];

  constructor(modelName: string, columns?: string[]) {
    this.modeName = modelName;
    this.columns = columns ?? [];
  }

  async getByQuery({ orderBy, query, limit, offset }: IQuery) {
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
}
