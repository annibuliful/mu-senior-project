import {
  Body,
  Controller,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { IController } from '../../shared/interface/controller';
import { FamilyDto } from './family.dto';
import { IFamily } from './family.interface';
import { FamilyService } from './family.service';

@Controller('families')
export class FamilyController implements IController<IFamily> {
  constructor(private familyService: FamilyService) {}
  getById(id: string): Promise<IFamily> {
    throw new Error('Method not implemented.');
  }
  getByQuery(query: IQuery): Promise<IFamily[]> {
    throw new Error('Method not implemented.');
  }

  @Post()
  async create(@Body() data: FamilyDto): Promise<IFamily> {
    try {
      const result = await this.familyService.create(data);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() data: IFamily,
  ): Promise<IFamily> {
    try {
      const result = await this.familyService.updateById(id, data);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }
  deleteById(id: string): Promise<string | IFamily> {
    throw new Error('Method not implemented.');
  }
}
