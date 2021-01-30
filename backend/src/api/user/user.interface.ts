type Gender = 'female' | 'male';
type Role = 'admin' | 'user';

export interface ICreateUser {
  username: string;
  password: string;
  fullname?: string;
  birthDate?: Date;
  profileImg?: string;
  gender: Gender;
  phone?: string[];
  role: Role;
  diseases?: string[];
  receivedVaccines?: string[];
}

export interface IUser extends ICreateUser {
  message?: string;
  userId: string;
  createAt: Date;
  updateAt: Date;
}
