import { Injectable } from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { sqlBuilder } from 'src/shared/services/sql-builder';
import { IService } from '../../shared/interface/service';
import { IAppointment } from './appointment.interface';

@Injectable()
export class AppointmentService implements IService<IAppointment> {
  builder: sqlBuilder<IAppointment>;
  modelName: string = 'appointments';
  columns: string[] = [
    'appointmentId',
    'offlineAppointmentId',
    'childId',
    'status',
    'selectedVaccines',
    'time',
    'vaccineId',
    'dates',
    'createAt',
    'updateAt',
  ];
  primaryKeyName: string = 'appointmentId';
  serviceName: string = 'appointment';

  constructor() {
    this.builder = new sqlBuilder({
      modelName: this.modelName,
      columns: this.columns,
      primaryKeyName: this.primaryKeyName,
    });
  }

  async getById(id: string): Promise<IAppointment> {
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

  async getByQuery(query: IQuery): Promise<IAppointment[]> {
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

  async create(data: IAppointment): Promise<IAppointment> {
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
  async updateById(id: string, data: IAppointment): Promise<IAppointment> {
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
  deleteById(id: string): Promise<string | IAppointment> {
    throw new Error('Method not implemented.');
  }
}
