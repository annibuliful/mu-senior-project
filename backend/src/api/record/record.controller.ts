import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IController } from '../../shared/interface/controller';
import { IQuery } from '../../shared/interface/sql';
import { RecordDto } from './record.dto';
import { IRecord } from './record.inteface';
import { RecordService } from './record.service';

@Controller('records')
export class RecordController implements IController<IRecord> {
  constructor(private recordService: RecordService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<IRecord> {
    try {
      const result = await this.recordService.getById(id);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  @Get()
  async getByQuery(@Query() query: IQuery): Promise<IRecord[]> {
    try {
      const result = await this.recordService.getByQuery(query);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  @Post()
  async create(@Body() data: RecordDto): Promise<IRecord> {
    try {
      const result = await this.recordService.create(data);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() data: RecordDto,
  ): Promise<IRecord> {
    try {
      const result = await this.recordService.updateById(id, data);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  deleteById(id: string): Promise<string | IRecord> {
    throw new Error('Method not implemented.');
  }
}
