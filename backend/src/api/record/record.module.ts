import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';

@Module({
  imports: [],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
