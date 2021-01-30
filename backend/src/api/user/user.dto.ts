type Gender = 'female' | 'male';
type Role = 'admin' | 'user';

export class CreateUserDto {
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
