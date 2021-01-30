import { IQuery } from './sql';

export interface IController<T> {
  getById(id: string): T;
  getByQuery(query: IQuery): T[];
  create(data: T): T;
  updateById(id: string, data: T): T;
  deleteById(id: string): string;
}
