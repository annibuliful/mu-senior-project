import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  HttpException,
} from '@nestjs/common';
import { IQuery } from 'src/shared/interface/sql';
import { IController } from '../../shared/interface/controller';
import { FamilyService } from '../family/family.service';
import { CreateUserDto } from './user.dto';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController implements IController<IUser> {
  constructor(
    private userService: UserService,
    private familyService: FamilyService,
  ) {}

  getByQuery(query: IQuery): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }

  @Post()
  async create(@Body() data: CreateUserDto): Promise<IUser> {
    try {
      const result = await this.userService.create(data);
      const { password, username, ...familyData } = data;
      await this.familyService.create({ ...familyData, userId: result.userId });
      return result;
    } catch (e) {
      console.log('e', e);
      return e;
    }
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() data: IUser,
  ): Promise<IUser> {
    try {
      const result = await this.userService.update(Number(id), data);
      return result;
    } catch (e) {
      throw new HttpException('Internal server error', 500);
    }
  }

  @Delete(':id')
  deleteById(id: string): Promise<string | IUser> {
    throw new Error('Method not implemented.');
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<IUser> {
    const result: IUser = await this.userService.getById(Number(id));

    return result;
  }
}
