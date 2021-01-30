export type Operator =
  | '='
  | '>'
  | '<'
  | '!='
  | '>='
  | '<='
  | 'like'
  | 'not like';

export type Method = 'where' | 'orWhere' | 'whereIn' | 'whereNotIn';

type Order = 'desc' | 'asc';
interface ISortQuery {
  column: string;
  order: Order;
}

interface ICustomQuery {
  column: string;
  operator: Operator;
  method: Method;
  value: string;
}
export interface IQuery {
  orderBy?: ISortQuery[];
  query?: ICustomQuery[];
  limit?: number;
  offset?: number;
}
