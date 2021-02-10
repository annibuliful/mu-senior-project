import { Injectable } from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { sqlBuilder } from 'src/shared/services/sql-builder';
import { IService } from '../../shared/interface/service';
import { IRecord } from './record.inteface';

@Injectable()
export class RecordService implements IService<IRecord> {
  builder: sqlBuilder<IRecord>;
  modelName: string = 'records';
  columns: string[] = [
    'recordId',
    'offlineRecordId',
    'appointmentId',
    'batchNO',
    'childId',
    'doctorInfo',
    'freetext',
    'hostpitalName',
    'photoDate',
    'receivingDate',
    'recordImage',
    'selectedVaccines',
    'createAt',
    'updateAt',
  ];
  primaryKeyName: string = 'recordId';
  serviceName: string = 'record';

  constructor() {
    this.builder = new sqlBuilder({
      modelName: this.modelName,
      columns: this.columns,
      primaryKeyName: this.primaryKeyName,
    });
  }

  async getById(id: string): Promise<IRecord> {
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
  async getByQuery(query: IQuery): Promise<IRecord[]> {
    try {
      const result = await this.builder.getByQuery(query);
      return result;
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
  async create(data: IRecord): Promise<IRecord> {
    try {
      const result = await this.builder.create(data);
      return result[0];
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }

  async updateById(id: string, data: IRecord): Promise<IRecord> {
    try {
      const result = await this.builder.updateById(id, data);
      return result;
    } catch (e) {
      throw {
        service: this.serviceName,
        error: new Error(e),
      };
    }
  }
  deleteById(id: string): Promise<string | IRecord> {
    throw new Error('Method not implemented.');
  }
}
