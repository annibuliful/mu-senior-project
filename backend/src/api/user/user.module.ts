import { Module } from '@nestjs/common';
import { FamilyService } from '../family/family.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, FamilyService],
})
export class UserModule {}
