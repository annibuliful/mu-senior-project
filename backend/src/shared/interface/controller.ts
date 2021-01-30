import { IQuery } from './sql';

export interface IController<T> {
  getById(id: string): Promise<T>;
  getByQuery(query: IQuery): Promise<T[]>;
  create(data: T): Promise<T>;
  updateById(id: string, data: T): Promise<T>;
  deleteById(id: string): Promise<T | string>;
}
