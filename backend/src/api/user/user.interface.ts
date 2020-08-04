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

export interface IQuery {
  search?: string;
  orderBy?: ISortQuery[];
}

export interface IUser extends ICreateUser {
  message?: string;
  userId: number;
  createAt: Date;
  updateAt: Date;
}
