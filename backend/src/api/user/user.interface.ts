type Gender = 'female' | 'male';
type Role = 'admin' | 'user';

export interface CreateUser {
  username: string;
  password: string;
  fullname?: string;
  birthDate?: Date;
  profileImage?: string;
  gender: Gender;
  phone?: string[];
  role: Role;
}

export interface Query {}
export interface IUser extends CreateUser {
  message?: string;
  userId: number;
  createAt: Date;
  updateAt: Date;
}
