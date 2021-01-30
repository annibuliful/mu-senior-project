import {
  Body,
  Controller,
  HttpException,
  Param,
  Patch,
  Post,
  Get,
  Delete,
} from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { IController } from '../../shared/interface/controller';
import { FamilyDto } from './family.dto';
import { IFamily } from './family.interface';
import { FamilyService } from './family.service';

@Controller('families')
export class FamilyController implements IController<IFamily> {
  constructor(private familyService: FamilyService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<IFamily> {
    try {
      const result = await this.familyService.getById(id);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
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

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<string | IFamily> {
    try {
      const result = await this.familyService.deleteById(id);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }
}
