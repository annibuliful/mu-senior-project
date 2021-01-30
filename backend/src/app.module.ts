import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { FamilyModule } from './api/family/family.module';
import { AppointmentModule } from './api/appointment/appointment.module';
import { RecordModule } from './api/record/record.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    FamilyModule,
    AppointmentModule,
    RecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
