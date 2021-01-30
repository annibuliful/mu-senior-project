import { Injectable } from '@nestjs/common';
import { IQuery } from '../../shared/interface/sql';
import { sqlBuilder } from '../../shared/services/sql-builder';
import { IService } from '../../shared/interface/service';
import { IFamily } from './family.interface';

@Injectable()
export class FamilyService implements IService<IFamily> {
  builder: sqlBuilder<IFamily>;
  modelName: string = 'families';
  columns: string[] = [
    'userId',
    'familyId',
    'fullname',
    'birthDate',
    'profileImg',
    'gender',
    'phone',
    'diseases',
    'receivedVaccines',
    'createAt',
    'updateAt',
  ];
  primaryKeyName: string = 'familyId';
  serviceName: string = 'family';

  constructor() {
    this.builder = new sqlBuilder({
      modelName: this.modelName,
      columns: this.columns,
      primaryKeyName: this.primaryKeyName,
    });
  }

  async getById(id: string): Promise<IFamily> {
    try {
      const result = await this.builder.getById(id);
      return result[0];
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
  getByQuery(query: IQuery): Promise<IFamily[]> {
    throw new Error('Method not implemented.');
  }

  async create(data: IFamily): Promise<IFamily> {
    try {
      const result = await this.builder.create(data);
      return result;
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async updateById(id: string, data: IFamily): Promise<IFamily> {
    try {
      const result = await this.builder.updateById(id, data);
      return result[0];
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async deleteById(id: string): Promise<IFamily> {
    try {
      const result = await this.builder.deleteById(id);
      return { ...result, count: result };
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
}
