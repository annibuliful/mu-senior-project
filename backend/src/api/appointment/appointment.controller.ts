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
import { IController } from 'src/shared/interface/controller';
import { IQuery } from 'src/shared/interface/sql';
import { AppointmentDto } from './appointment.dto';
import { IAppointment } from './appointment.interface';
import { AppointmentService } from './appointment.service';

@Controller('appointments')
export class AppointmentController implements IController<IAppointment> {
  constructor(private appointmentService: AppointmentService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<IAppointment> {
    try {
      const result = await this.appointmentService.getById(id);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  async getByQuery(@Query() query: IQuery): Promise<IAppointment[]> {
    try {
      const result = await this.appointmentService.getByQuery(query);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  @Post()
  async create(@Body() data: AppointmentDto): Promise<IAppointment> {
    try {
      const result = await this.appointmentService.create(data);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() data: AppointmentDto,
  ): Promise<IAppointment> {
    try {
      const result = await this.appointmentService.updateById(id, data);
      return result;
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  deleteById(id: string): Promise<string | IAppointment> {
    throw new Error('Method not implemented.');
  }
}
