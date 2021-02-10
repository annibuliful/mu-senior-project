import { CreateUserDto } from '../user/user.dto';

type Gender = 'female' | 'male';
type Role = 'admin' | 'user';

export class FamilyDto extends CreateUserDto {
  userId: string;
  fullname?: string;
  birthDate?: Date;
  profileImg?: string;
  gender: Gender;
  phone?: string[];
  role: Role;
  diseases: string[];
  receivedVaccines: string[];
}
