import { Injectable } from '@nestjs/common';
import db from '../../../knex';
import { IRevisionData, IRevisionResponse } from './interface';

@Injectable()
export class RevisionService {
  private readonly serviceName = 'revisions';

  private readonly columns = ['userId', 'filePath', 'createdAt'];

  async create(data: IRevisionData): Promise<IRevisionResponse> {
    try {
      const result = await db
        .insert(data)
        .into(this.serviceName)
        .returning<IRevisionResponse>('*');
      return result;
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async getByUserId(userId: string): Promise<IRevisionResponse> {
    try {
      const result = await db(this.serviceName)
        .select(this.columns)
        .where('userId', '=', userId)
        .orderBy('createdAt', 'desc')
        .limit(1);

      return result[0];
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
}
