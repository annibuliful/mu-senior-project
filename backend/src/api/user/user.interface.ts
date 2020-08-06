import { Method, Operator } from '../../shared/interface/sql';

type Gender = 'female' | 'male';
type Role = 'admin' | 'user';
type Order = 'desc' | 'asc';

export interface ICreateUser {
  username: string;
  password: string;
  fullname?: string;
  birthDate?: Date;
  profileImage?: string;
  gender: Gender;
  phone?: string[];
  role: Role;
}
interface ISortQuery {
  column: string;
  order: Order;
}

interface ICustomQuery {
  column: string;
  operator: Operator;
  method: Method;
  value: any;
}
export interface IQuery {
  orderBy?: ISortQuery[];
  query?: ICustomQuery[];
  limit?: number;
  offset?: number;
}

export interface IUser extends ICreateUser {
  message?: string;
  userId: number;
  createAt: Date;
  updateAt: Date;
}
