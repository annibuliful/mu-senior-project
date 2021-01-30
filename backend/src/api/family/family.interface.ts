import { IResponse } from 'src/shared/interface/response';
import { IUser } from '../user/user.interface';

export interface IFamily
  extends Omit<IUser, 'username' | 'password' | 'createAt' | 'updateAt'> {
  familyId?: string;
  userId: string;
}

export interface ICreateFamily extends IFamily, IResponse {}
