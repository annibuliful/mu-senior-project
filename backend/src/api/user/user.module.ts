import { Module } from '@nestjs/common';
import { RevisionService } from 'src/shared/services/revision-data/revision-data.service';
import { FamilyService } from '../family/family.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, FamilyService, RevisionService],
})
export class UserModule {}
