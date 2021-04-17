import { IsNotEmpty } from 'class-validator';

type Gender = 'female' | 'male';
type Role = 'admin' | 'user';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  fullname?: string;
  birthDate?: Date;
  profileImg?: string;
  gender: Gender;
  phone?: string[];

  @IsNotEmpty()
  role: Role = 'user';

  diseases?: string[];
  receivedVaccines?: string[];
}
