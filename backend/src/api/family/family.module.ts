import { Module } from '@nestjs/common';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';

@Module({
  imports: [],
  controllers: [FamilyController],
  providers: [FamilyService],
})
export class FamilyModule {}
