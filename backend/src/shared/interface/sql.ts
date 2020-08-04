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
