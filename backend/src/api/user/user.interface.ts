type Gender = 'female' | 'male';
type Role = 'admin' | 'user';

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

export interface IUser extends ICreateUser {
  message?: string;
  userId: number;
  createAt: Date;
  updateAt: Date;
}
