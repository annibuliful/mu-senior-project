import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { FamilyModule } from './api/family/family.module';
import { AppointmentModule } from './api/appointment/appointment.module';
import { RecordModule } from './api/record/record.module';
import { UploadModule } from './api/upload/upload.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    FamilyModule,
    AppointmentModule,
    RecordModule,
    UploadModule,
    ServeStaticModule.forRoot({
      serveRoot: '/static',
      rootPath: join(__dirname, '..', 'uploads'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
