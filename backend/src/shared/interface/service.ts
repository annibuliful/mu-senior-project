import { sqlBuilder } from '../services/sql-builder';
import { IController } from './controller';
import { IQuery } from './sql';

export interface IService<T> extends IController<T> {
  builder: sqlBuilder<T>;
  modelName: string;
  columns: string[];
  primaryKeyName: string;
  serviceName: string;
}
